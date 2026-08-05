"use client";

import { useState } from "react";
import { FiChevronDown, FiHelpCircle, FiSearch } from "react-icons/fi";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  showSearch?: boolean;
}

export function FAQAccordion({
  items,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about precision land surveying, municipal clearances, and turnaround times.",
  showSearch = true,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = items.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Structured Data (Schema.org FAQPage)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  };

  return (
    <section className="w-full max-w-4xl mx-auto py-12">
      
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
          <FiHelpCircle className="text-sm" /> Knowledge Base & FAQs
        </div>
        <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          {title}
        </h3>
        <p className="text-sm text-slate-600 max-w-2xl mx-auto">
          {subtitle}
        </p>

        {showSearch && (
          <div className="mt-6 max-w-md mx-auto relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
            <input
              type="text"
              placeholder="Search questions (e.g. DGPS, boundary survey, timelines)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
          </div>
        )}
      </div>

      <div className="space-y-3">
        {filteredItems.length === 0 ? (
          <div className="text-center py-8 text-slate-500 text-sm">
            No questions matching &quot;{searchQuery}&quot;. Please contact our team directly for answers!
          </div>
        ) : (
          filteredItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-emerald-200 shadow-md ring-1 ring-emerald-100"
                    : "bg-slate-50/70 hover:bg-white border-slate-200/80"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-base font-bold text-slate-900">
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "bg-emerald-600 text-white rotate-180" : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    <FiChevronDown className="text-base" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

    </section>
  );
}
