"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { FirebaseError } from "firebase/app";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  authError: string;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  login: async () => false,
  logout: () => {},
  authError: "",
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [authError, setAuthError] = useState("");

  /* Listen to Firebase auth state changes */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setHydrated(true);
    });
    return () => unsubscribe();
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    setAuthError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (error: unknown) {
      const code = error instanceof FirebaseError ? error.code : "";

      // Map Firebase error codes to user-friendly messages
      if (code === "auth/user-not-found") {
        setAuthError("User not found.");
      } else if (code === "auth/wrong-password") {
        setAuthError("Incorrect password.");
      } else if (code === "auth/invalid-credential") {
        setAuthError("Invalid email or password.");
      } else if (code === "auth/invalid-email") {
        setAuthError("Invalid email address.");
      } else if (code === "auth/too-many-requests") {
        setAuthError("Too many failed attempts. Please try again later.");
      } else {
        setAuthError("Login failed. Please try again.");
      }
      return false;
    }
  }, []);

  const logout = useCallback(async () => {
    await signOut(auth);
    setUser(null);
    try {
      sessionStorage.clear();
      // Clear cookies by setting them to expire
      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });
    } catch (e) {
      console.error("Error clearing session data:", e);
    }
  }, []);

  /* Avoid hydration mismatch — render children only after client rehydration */
  if (!hydrated) return null;

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: !!user, user, login, logout, authError }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
