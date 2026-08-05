"use client";

import Link from "next/link";
import { 
  FiCompass, 
  FiActivity, 
  FiMap, 
  FiLayers, 
  FiMaximize, 
  FiCrosshair, 
  FiGrid, 
  FiCheckCircle, 
  FiShield,
} from "react-icons/fi";
import { SERVICES_DATA } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "gps-survey": FiCompass,
  "topographical-survey": FiActivity,
  "land-survey": FiMap,
  "contour-survey": FiLayers,
  "subdivision-survey": FiMaximize,
  "boundary-refixing": FiCrosshair,
  "building-setting-out": FiGrid,
};

export default function ServicesHubPage() {
  return (
    <main className="min-h-screen bg-slate-50/70 py-16">
      
      {/* Header Banner */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-16">
        <FadeIn className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <FiShield className="text-sm text-emerald-600" /> Enterprise Geodetic Portfolio
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Digital Land Surveying Services
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Combining multi-frequency satellite DGPS, 1-second robotic total stations, and precision digital auto-levels with licensed surveyor expertise for absolute legal and structural certainty.
          </p>
        </FadeIn>
      </div>

      {/* Services List with Detailed Cards */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <StaggerContainer staggerDelay={0.1} className="space-y-8">
          {Object.values(SERVICES_DATA).map((srv) => {
            const Icon = serviceIcons[srv.slug] || FiCompass;
            return (
              <StaggerItem key={srv.slug} direction="up">
                <div
                  className="glass-panel rounded-2xl p-7 sm:p-9 border border-slate-200/80 bg-white flex flex-col lg:flex-row gap-8 lg:gap-10 items-start justify-between group hover-lift transition-all duration-300"
                >
                  <div className="space-y-5 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                        <Icon />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono font-semibold text-emerald-700 uppercase tracking-wider">{srv.badge}</span>
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                          {srv.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {srv.fullOverview[0]}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {srv.whenNeeded.slice(0, 3).map((wn, wIdx) => (
                        <div key={wIdx} className="flex items-start gap-2 text-xs text-slate-600">
                          <FiCheckCircle className="text-emerald-500 text-sm flex-shrink-0 mt-0.5" />
                          <span>{wn}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {srv.deliverables.slice(0, 3).map((del, dIdx) => (
                        <span key={dIdx} className="text-xs font-mono bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Specs & CTA Box */}
                  <div className="w-full lg:w-72 bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-between space-y-5">
                    <div className="space-y-2.5 text-xs font-mono">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                        <span className="text-slate-500">Accuracy:</span>
                        <span className="font-bold text-emerald-600">{srv.accuracy}</span>
                      </div>
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                        <span className="text-slate-500">Turnaround:</span>
                        <span className="font-bold text-slate-900">{srv.turnaroundTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Legal Stamped:</span>
                        <span className="font-bold text-emerald-600">Certified</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Link
                        href={`/services/${srv.slug}`}
                        className="block w-full py-2.5 rounded-lg bg-slate-900 hover:bg-emerald-700 text-white font-semibold text-xs text-center shadow-sm transition-colors"
                      >
                        View Full Details →
                      </Link>

                      <Link
                        href={`/contact?service=${srv.slug}`}
                        className="block w-full py-2 rounded-lg bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs text-center border border-slate-300 transition-colors"
                      >
                        Schedule Assessment
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>

    </main>
  );
}
