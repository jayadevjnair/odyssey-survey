"use client";

import Link from "next/link";
import { 
  FiMapPin, 
  FiLayers, 
  FiCpu,
  FiCompass
} from "react-icons/fi";
import { CASE_STUDIES } from "@/lib/data";
import { BeforeAfterSlider } from "@/components/interactive/BeforeAfterSlider";
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "@/components/ui/ScrollReveal";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      
      {/* Header Banner */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-16 text-center space-y-4">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <FiCompass className="text-sm text-emerald-600" /> Proven Track Record
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mt-2">
            Featured Projects & Geodetic Case Studies
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mt-2">
            From 250MW utility-scale solar parks to 65-story urban high-rises and residential subdivisions — examine how our millimeter-precision surveys safeguard multi-million dollar investments.
          </p>
        </FadeIn>
      </div>

      {/* Interactive Before/After Visualizer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20">
        <ScaleIn duration={0.7} className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl">
          <BeforeAfterSlider 
            title="Real-World CAD Transformation: Raw Land vs Contour Mesh"
            subtitle="Drag the interactive slider to inspect how our field DGPS and robotic total station data is processed into layered civil CAD deliverables."
          />
        </ScaleIn>
      </div>

      {/* Case Studies Detailed Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-12">
        <FadeIn className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Detailed Project Case Studies
          </h2>
          <p className="text-sm text-slate-500">In-depth technical breakdown of challenges, solutions, and deliverables.</p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 gap-12">
          {CASE_STUDIES.map((project) => (
            <StaggerItem key={project.id} direction="up">
              <div
                className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-200 bg-white shadow-xl flex flex-col lg:flex-row gap-8 lg:gap-12 items-start"
              >
                {/* Left Details */}
                <div className="flex-1 space-y-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-slate-500 font-medium flex items-center gap-1">
                      <FiMapPin className="text-emerald-500" /> {project.location}
                    </span>
                    <span className="text-slate-400">&bull;</span>
                    <span className="text-slate-500 font-medium">{project.clientType}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs sm:text-sm text-amber-900 space-y-1">
                      <span className="font-bold block uppercase tracking-wider text-[11px] text-amber-800">The Challenge:</span>
                      <p>{project.challenge}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-xs sm:text-sm text-emerald-900 space-y-1">
                      <span className="font-bold block uppercase tracking-wider text-[11px] text-emerald-800">The Odyssey Solution & Outcome:</span>
                      <p>{project.solution}</p>
                    </div>
                  </div>

                  {/* Tech & Hardware Used */}
                  <div className="pt-2">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                      Equipment & GIS Software Used:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.techUsed.map((tech, tIdx) => (
                        <span key={tIdx} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-lg font-medium flex items-center gap-1.5">
                          <FiCpu className="text-emerald-600 text-xs" /> {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Key Metrics Card */}
                <div className="w-full lg:w-80 bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4 flex items-center gap-2">
                      <FiLayers className="text-emerald-400" /> Key Impact Stats
                    </h4>

                    <div className="space-y-4">
                      {project.stats.map((st, sIdx) => (
                        <div key={sIdx} className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                          <div className="text-xl font-black text-white">{st.value}</div>
                          <div className="text-xs text-slate-400">{st.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs text-center shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02]"
                  >
                    Discuss Similar Project
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

    </main>
  );
}
