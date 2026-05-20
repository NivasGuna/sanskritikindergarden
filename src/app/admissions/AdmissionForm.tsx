"use client";

import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Send,
} from "lucide-react";
import { db } from "@/lib/firebase";
import { cn } from "@/lib/utils";

type FormData = {
  studentName: string;
  parentName: string;
  phone: string;
  email: string;
  age: string;
  message?: string;
};

type SubmitStatus = "idle" | "success" | "error";

const phonePattern = /^\+?[\d\s().-]{7,18}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClassName =
  "h-[3.25rem] w-full rounded-2xl border border-peach-line bg-white/95 px-4 text-base font-semibold text-forest-dark shadow-sm outline-none transition-all placeholder:text-forest-muted/60 focus:border-coral focus:ring-4 focus:ring-coral/18 disabled:cursor-not-allowed disabled:opacity-70";

const textAreaClassName = cn(inputClassName, "min-h-32 py-4 leading-7");

export default function AdmissionForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      studentName: "",
      parentName: "",
      phone: "",
      email: "",
      age: "",
      message: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: FormData) => {
    setStatus("idle");

    try {
      await addDoc(collection(db, "applications"), {
        studentName: data.studentName.trim(),
        parentName: data.parentName.trim(),
        phone: data.phone.trim(),
        email: data.email.trim().toLowerCase(),
        age: data.age,
        message: data.message?.trim() || "",
        status: "pending",
        createdAt: serverTimestamp(),
      });

      reset();
      setStatus("success");
    } catch (error) {
      console.error("Admission application submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[2rem] border border-peach-line bg-white/95 p-5 shadow-forest-card backdrop-blur-md sm:p-7 lg:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Student Name" error={errors.studentName?.message}>
          <input
            {...register("studentName", {
              required: "Student name is required.",
              maxLength: {
                value: 100,
                message: "Student name must be under 100 characters.",
              },
            })}
            className={cn(
              inputClassName,
              errors.studentName && "border-red-300"
            )}
            placeholder="e.g. Aarav"
            autoComplete="given-name"
            aria-invalid={Boolean(errors.studentName)}
          />
        </Field>

        <Field label="Parent Name" error={errors.parentName?.message}>
          <input
            {...register("parentName", {
              required: "Parent name is required.",
              maxLength: {
                value: 100,
                message: "Parent name must be under 100 characters.",
              },
            })}
            className={cn(
              inputClassName,
              errors.parentName && "border-red-300"
            )}
            placeholder="e.g. Rahul"
            autoComplete="name"
            aria-invalid={Boolean(errors.parentName)}
          />
        </Field>

        <Field label="Phone Number" error={errors.phone?.message}>
          <input
            {...register("phone", {
              required: "Phone number is required.",
              pattern: {
                value: phonePattern,
                message: "Enter a valid phone number.",
              },
            })}
            className={cn(inputClassName, errors.phone && "border-red-300")}
            placeholder="e.g. +91 98765 43210"
            inputMode="tel"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
          />
        </Field>

        <Field label="Email" error={errors.email?.message}>
          <input
            {...register("email", {
              required: "Email is required.",
              maxLength: {
                value: 255,
                message: "Email must be under 255 characters.",
              },
              pattern: {
                value: emailPattern,
                message: "Enter a valid email.",
              },
            })}
            type="email"
            className={cn(inputClassName, errors.email && "border-red-300")}
            placeholder="e.g. parent@email.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
          />
        </Field>

        <Field label="Child's Age" error={errors.age?.message}>
          <div className="relative">
            <select
              {...register("age", {
                required: "Age is required.",
              })}
              className={cn(
                inputClassName,
                "appearance-none pr-11",
                errors.age && "border-red-300"
              )}
              aria-invalid={Boolean(errors.age)}
            >
              <option value="">Select age</option>
              <option value="2">2 years</option>
              <option value="3">3 years</option>
              <option value="4">4 years</option>
              <option value="5">5 years</option>
              <option value="6">6 years</option>
            </select>
            <ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2 text-coral-ink" />
          </div>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Message (Optional)" error={errors.message?.message}>
          <textarea
            {...register("message", {
              maxLength: {
                value: 500,
                message: "Message must be under 500 characters.",
              },
            })}
            className={cn(
              textAreaClassName,
              errors.message && "border-red-300"
            )}
            placeholder="Any questions or special needs?"
            rows={4}
            aria-invalid={Boolean(errors.message)}
          />
        </Field>
      </div>

      {status === "success" ? (
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm leading-6 font-bold text-emerald-700">
          <CheckCircle2 className="mt-0.5 size-5 shrink-0" />
          <span>
            Application submitted successfully. We&apos;ll contact you soon.
          </span>
        </div>
      ) : null}

      {status === "error" ? (
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-red-100 bg-red-50 p-4 text-sm leading-6 font-bold text-red-700">
          <AlertCircle className="mt-0.5 size-5 shrink-0" />
          <span>Something went wrong. Please try again later.</span>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex h-14 w-full items-center justify-center rounded-full bg-coral px-8 text-base font-black text-white shadow-coral-button transition-all hover:-translate-y-0.5 hover:bg-coral-dark disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-65"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-3 size-5 animate-spin" />
            Submitting
          </>
        ) : (
          <>
            Submit Application
            <Send className="ml-3 size-5" />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  hint,
  children,
}: {
  label: string;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="block min-w-0">
      <span className="mb-2 flex items-center justify-between gap-3">
        <span className="text-sm font-black text-forest-dark">{label}</span>
        {hint ? (
          <span className="text-xs font-bold text-forest-muted">{hint}</span>
        ) : null}
      </span>
      {children}
      {error ? (
        <span className="mt-2 block text-xs font-bold text-red-700">
          {error}
        </span>
      ) : null}
    </label>
  );
}
