"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiClock, 
  FiCheckCircle, 
  FiSend, 
  FiShield,
  FiCompass,
  FiMessageCircle
} from "react-icons/fi";
import { SERVICE_AREAS, SERVICES_DATA } from "@/lib/data";
import { FAQAccordion } from "@/components/interactive/FAQAccordion";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "topographical-survey";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: initialService,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "17ddf36a-98e0-4629-b4ba-14785c4fa6d1",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          subject: `New Survey Assessment Request - ${formData.name} (${formData.phone})`,
          from_name: "Odyssey Survey Portal",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(result.message || "Failed to submit request. Please try again or call directly.");
      }
    } catch {
      setErrorMessage("Network error occurred. Please try again or contact us directly on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactFaqs = [
    {
      q: "What happens after I submit a survey request?",
      a: "Our senior geodetic surveyor reviews your property coordinates, satellite imagery, and requirements, and contacts you within 15 to 30 minutes with a confirmed mobilization schedule and technical workflow plan."
    },
    {
      q: "Can I provide satellite coordinates or deed copies over WhatsApp?",
      a: "Yes! You can instantly share KMZ/KML files, revenue maps, or survey sketches directly to our surveyor WhatsApp line at +91 79947 76610."
    },
    {
      q: "Is there any obligation for a preliminary site assessment?",
      a: "No. All initial desktop satellite assessments, feasibility checks, and project milestone plans are completely free with zero obligation."
    }
  ];

  return (
    <div className="space-y-16">
      
      {/* Top Hero Heading */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
          <FiCompass className="text-sm text-emerald-600" /> Rapid 15-Minute Response
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
          Request a Precision Site Survey
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Connect directly with licensed land surveyors. Get guaranteed accuracy, clear deliverables, and 24-hour on-site mobilization.
        </p>
      </div>

      {/* Main 2-Column Form & NAP Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Form Box (7 cols) */}
        <div className="lg:col-span-7 glass-panel p-7 sm:p-9 rounded-2xl border border-slate-200/80 bg-white shadow-xl">
          {submitted ? (
            <div className="text-center py-10 space-y-5 animate-in fade-in zoom-in duration-300">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl mx-auto">
                <FiCheckCircle />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Survey Request Received!</h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. A senior geodetic surveyor has been assigned to your project and will call you at <span className="font-semibold text-emerald-700">{formData.phone}</span> within 15 minutes with a comprehensive site execution plan.
              </p>
              <div className="pt-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      phone: "",
                      email: "",
                      service: initialService,
                      message: "",
                    });
                  }}
                  className="px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="access_key" value="17ddf36a-98e0-4629-b4ba-14785c4fa6d1" />
              <input type="hidden" name="subject" value={`New Survey Request from ${formData.name || "Website Customer"}`} />
              <input type="hidden" name="from_name" value="Odyssey Survey Portal" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

              <div className="border-b border-slate-100 pb-3">
                <h2 className="text-lg font-bold text-slate-900">Project Parameters</h2>
                <p className="text-xs text-slate-500">Fill in your property details for an exact site assessment.</p>
              </div>

              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium flex items-center justify-between">
                  <span>{errorMessage}</span>
                  <a href="tel:+917994776610" className="underline font-bold hover:text-rose-900 ml-2">Call Directly</a>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Vikram Mehta"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 79947 76610"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="vikram@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Survey Discipline *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  >
                    {Object.values(SERVICES_DATA).map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.shortTitle}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Project Notes & Specific Requirements
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Describe your site (e.g. terrain slope, boundary dispute history, required CAD format, specific municipal sanction)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Submitting Assessment Request...</span>
                ) : (
                  <>
                    <FiSend />
                    <span>Submit & Request Free Site Assessment</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 font-mono">
                <span className="flex items-center gap-1"><FiShield className="text-emerald-500" /> 100% Confidential</span>
                <span>&bull;</span>
                <span><FiCheckCircle className="text-teal-500" /> No Obligation</span>
                <span>&bull;</span>
                <span><FiClock className="text-emerald-600" /> 15-Min Response</span>
              </div>
            </form>
          )}
        </div>

        {/* Right Direct Contact Info (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Main Headquarters Box */}
          <div className="bg-slate-950 text-white p-7 rounded-2xl border border-slate-800 space-y-5 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-tech-grid-dark opacity-15 pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <div>
                <div className="text-[10px] font-mono font-semibold uppercase tracking-widest text-emerald-400 mb-1">
                  Central Geodetic Dispatch
                </div>
                <h2 className="text-xl font-bold">Odyssey Surveyors Pvt. Ltd.</h2>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <FiMapPin className="text-emerald-400 text-base flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Headquarters (Ponkunnam)</div>
                    <span className="text-slate-400">Near Private Bus Stand, NH 183, Ponkunnam, Kottayam, Kerala 686506</span>
                    <div className="mt-2 pt-2 border-t border-slate-800">
                      <div className="font-semibold text-white">Branch Office (Pala)</div>
                      <span className="text-slate-400">Odyssey Survey Tech Centre, Main Road, Pala, Kottayam, Kerala 686575</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <FiPhone className="text-emerald-400 text-base flex-shrink-0" />
                  <a href="tel:+917994776610" className="hover:text-white font-mono font-bold text-emerald-300">
                    +91 79947 76610
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <FiMail className="text-emerald-400 text-base flex-shrink-0" />
                  <a href="mailto:odysseysurveyorspnkm@gmail.com" className="hover:text-white truncate">
                    odysseysurveyorspnkm@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <FiClock className="text-emerald-400 text-base flex-shrink-0" />
                  <span>Mon – Sunday: 8:00 AM – 7:00 PM (24/7 Field Dispatch)</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <a
                  href="https://wa.me/917994776610?text=Hi%20Odyssey%20Survey%2C%20I%20need%20a%20land%20survey%20assessment%20in%20Kerala."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
                >
                  <FiMessageCircle className="text-base" />
                  <span>Chat Direct on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Regional Hub Quick Directory */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-200/80 bg-white space-y-3 shadow-sm">
            <h2 className="text-xs font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <FiCompass className="text-emerald-600" /> Active Regional Hubs
            </h2>
            <div className="space-y-2 text-xs">
              {SERVICE_AREAS.slice(0, 4).map((a) => (
                <div key={a.slug} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <div>
                    <span className="font-semibold text-slate-900">{a.name}</span>
                    <span className="text-slate-400 text-[10px] block font-mono">{a.turnaroundTime}</span>
                  </div>
                  <span className="text-emerald-700 font-medium font-mono text-[11px]">{a.activeCrews} Field Crews</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Contact FAQs */}
      <section className="pt-4">
        <FAQAccordion
          items={contactFaqs}
          title="Mobilization & Dispatch Questions"
          subtitle="Everything you need to know about site visits, turnarounds, and surveyor allocation."
          showSearch={false}
        />
      </section>

    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50/70 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <Suspense fallback={<div className="text-center py-20 text-slate-500">Loading Contact Form...</div>}>
          <ContactFormInner />
        </Suspense>
      </div>
    </main>
  );
}
