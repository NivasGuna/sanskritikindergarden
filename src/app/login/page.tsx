"use client";

import { useState, useEffect, type FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/components/providers/auth-provider";
import "./login.css";

export default function LoginPage() {
  const { login, isLoggedIn, authError } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );
  const [loading, setLoading] = useState(false);

  /* If already logged in, redirect to home */
  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/");
    }
  }, [isLoggedIn, router]);

  if (isLoggedIn) {
    return null;
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "Please enter your email address";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Please enter your password";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    const success = await login(email.trim(), password);
    setLoading(false);

    if (success) {
      router.replace("/");
    }
  }

  return (
    <main className="login-wrapper">
      {/* ── Floating Circles ── */}
      <div className="login-circle login-circle--1" />
      <div className="login-circle login-circle--2" />
      <div className="login-circle login-circle--3" />
      <div className="login-circle login-circle--4" />
      <div className="login-circle login-circle--5" />

      <div>
        {/* ── Card ── */}
        <div className="login-card" id="login-card">
          {/* Logo */}
          <div className="login-logo-wrap">
            <div className="login-logo">
              <Image
                src="/images/sans_logo.jpg"
                alt="Sanskriti Kindergarten Logo"
                width={80}
                height={80}
                className="object-cover"
                priority
              />
            </div>
          </div>

          <h1 className="login-title">Sanskriti Kindergarten</h1>
          <p className="login-subtitle">Welcome back!</p>

          {/* Firebase Auth Error (general) */}
          {authError && (
            <div className="login-error" role="alert" id="login-error">
              {authError}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} id="login-form" autoComplete="off">
            {/* Email */}
            <div className="login-field">
              <label className="login-label" htmlFor="login-email">
                Email Address
              </label>
              <div
                className={`login-input-wrap ${errors.email ? "login-input-wrap--error" : ""}`}
              >
                <span className="login-input-icon">
                  <Mail size={18} />
                </span>
                <input
                  id="login-email"
                  type="email"
                  className="login-input"
                  placeholder="admin@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email)
                      setErrors({ ...errors, email: undefined });
                  }}
                  autoComplete="email"
                  aria-describedby={
                    errors.email ? "login-email-error" : undefined
                  }
                />
              </div>
              {errors.email && (
                <p className="login-field-error" id="login-email-error">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="login-field">
              <label className="login-label" htmlFor="login-password">
                Password
              </label>
              <div
                className={`login-input-wrap ${errors.password ? "login-input-wrap--error" : ""}`}
              >
                <span className="login-input-icon">
                  <Lock size={18} />
                </span>
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  className="login-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password)
                      setErrors({ ...errors, password: undefined });
                  }}
                  autoComplete="current-password"
                  aria-describedby={
                    errors.password ? "login-password-error" : undefined
                  }
                />
                <button
                  type="button"
                  className="login-eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  id="login-toggle-password"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="login-field-error" id="login-password-error">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="login-btn"
              disabled={loading}
              id="login-submit"
            >
              {loading ? (
                <>
                  <span className="login-spinner" />
                  Signing in…
                </>
              ) : (
                "Let's Go!"
              )}
            </button>
          </form>

          <p className="login-tagline">Learn &nbsp; Play &nbsp; Grow</p>
        </div>

        <p className="login-bottom-text">Where little minds grow big!</p>
      </div>
    </main>
  );
}
