"use client";

import Link from "next/link";
import { FiPhone, FiMessageCircle, FiCalendar } from "react-icons/fi";

export function FloatingQuickBar() {
  return (
    <>
      {/* MOBILE BOTTOM STICKY ACTION DOCK (Visible on Phone Screens < 640px) */}
      <div className="sm:hidden fixed bottom-3 inset-x-3 z-40 pointer-events-auto">
        <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-slate-950/95 backdrop-blur-lg border border-slate-700/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          {/* Direct Phone Call */}
          <a
            href="tel:+917994776610"
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-800 active:bg-slate-700 text-white font-semibold text-xs tracking-wide transition-all shadow-sm border border-slate-700"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <FiPhone className="text-emerald-400 text-sm" />
            <span>Call Hotline</span>
          </a>

          {/* WhatsApp Instant Quote */}
          <a
            href="https://wa.me/917994776610?text=Hi%20Odyssey%20Survey%2C%20I%20need%20a%20land%20survey%20assessment%20in%20Kerala."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-600 active:bg-emerald-500 text-white font-semibold text-xs tracking-wide transition-all shadow-sm shadow-emerald-950"
          >
            <FiMessageCircle className="text-white text-base" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* DESKTOP & TABLET FLOATING DOCK (Visible on >= 640px) */}
      <div className="hidden sm:flex fixed bottom-5 right-5 z-40 items-center pointer-events-auto">
        <div className="flex items-center gap-2 p-1.5 rounded-full bg-slate-900/90 hover:bg-slate-900 backdrop-blur-md border border-slate-700/80 shadow-2xl transition-all duration-300">
          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/917994776610?text=Hi%20Odyssey%20Survey%2C%20I%20need%20a%20land%20survey%20assessment%20in%20Kerala."
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-11 h-11 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center text-xl shadow-sm transition-all hover:scale-105 group"
            title="Chat with Senior Surveyor on WhatsApp"
          >
            <FiMessageCircle />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-900 animate-pulse" />
          </a>

          {/* Direct Phone Hotline */}
          <a
            href="tel:+917994776610"
            className="w-11 h-11 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white flex items-center justify-center text-lg transition-all hover:scale-105"
            title="Call Dispatch: +91 79947 76610"
          >
            <FiPhone className="text-emerald-400" />
          </a>

          {/* Quick Schedule Button */}
          <Link
            href="/contact"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold tracking-wide transition-all hover:scale-105 shadow-sm"
            title="Schedule Site Assessment"
          >
            <FiCalendar className="text-sm" />
            <span>Book Survey</span>
          </Link>
        </div>
      </div>
    </>
  );
}
