// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBadJIL3vrVI7VkCVT4wF59Rdn7TVo_JhU",
  authDomain: "thoufiq0305.firebaseapp.com",
  projectId: "thoufiq0305",
  storageBucket: "thoufiq0305.firebasestorage.app",
  messagingSenderId: "611763920141",
  appId: "1:611763920141:web:ac68fd10c38812127b6444",
  measurementId: "G-K9N7G4V0LR",
};

// Initialize Firebase (prevent duplicate initialization in Next.js hot-reload)
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
