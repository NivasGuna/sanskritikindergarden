"use client";

import { MessageCircle } from "lucide-react";

const PHONE = "919941148333";
const MESSAGE = encodeURIComponent(
  "Hi! 👋 I’m interested in admissions at Sanskriti Kindergarten. Could you please share the admission process, fees, and available programs?"
);

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="animate-bounce-gentle fixed right-5 bottom-5 z-[60] flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_45px_rgba(37,211,102,0.34)] transition-transform hover:scale-110 focus-visible:ring-4 focus-visible:ring-[#25D366]/25 focus-visible:outline-none sm:right-6 sm:bottom-6"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="size-7" />
    </a>
  );
}
