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
  FiArrowRight, 
  FiPhone, 
  FiStar,
  FiMapPin,
  FiRadio,
  FiBarChart2
} from "react-icons/fi";
import Image from "next/image";
import { SERVICES_DATA, SERVICE_AREAS, CASE_STUDIES, TESTIMONIALS, COMPANY_STATS } from "@/lib/data";
import { SurveyedSitesShowcase } from "@/components/sections/SurveyedSitesShowcase";
import { BeforeAfterSlider } from "@/components/interactive/BeforeAfterSlider";
import { FAQAccordion } from "@/components/interactive/FAQAccordion";
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "gps-survey": FiCompass,
  "topographical-survey": FiActivity,
  "land-survey": FiMap,
  "contour-survey": FiLayers,
  "subdivision-survey": FiMaximize,
  "boundary-refixing": FiCrosshair,
  "building-setting-out": FiGrid,
};

export default function HomePage() {
  const homeFaqs = [
    {
      q: "What factors determine a land survey's scope and timeline?",
      a: "Survey scope and fieldwork duration depend on parcel acreage, topographical terrain complexity (flat vs. steep/undulating), vegetation density, and required CAD deliverables (such as 2D boundary verification vs. high-density 3D contour intervals with Revit BIM surface integration)."
    },
    {
      q: "How fast can Odyssey Survey mobilize to my site?",
      a: "We maintain active field survey crews equipped with RTK DGPS base-rovers and robotic total stations across our core regional hubs. We can mobilize to your site within 24 hours of project confirmation, with standard CAD drawing delivery in 2 to 4 business days."
    },
    {
      q: "Are your survey reports legally valid and municipal approved?",
      a: "Yes. Every survey conducted by Odyssey Survey is signed and sealed by licensed, registered surveyors and complies with government revenue department standards, municipal building sanctions (such as MCGM, BBMP, PMC, CIDCO, DDA), and civil court evidentiary guidelines."
    },
    {
      q: "What CAD and GIS deliverables will I receive?",
      a: "Standard deliverables include layered AutoCAD (.DWG / .DXF) drawings with standard architectural layer naming, high-resolution signed PDF survey maps, point coordinate tables in CSV, and optional 3D Revit BIM meshes (.LandXML) and 3D Point Cloud (.LAS / .XYZ) files."
    },
    {
      q: "How does DGPS surveying differ from traditional chain or optical surveying?",
      a: "Traditional manual surveys suffer from cumulative line-of-sight errors and take days over large parcels. DGPS (Differential GPS) uses multi-constellation satellite telemetry with RTK corrections to deliver sub-centimeter (±5mm) global georeferencing in a fraction of the time, without line-of-sight limitations."
    }
  ];

  const homeFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <main className="w-full overflow-hidden bg-white">
      
      {/* FAQ Schema for AI Search & Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      
      {/* 1. HERO SECTION - HIGH-FIDELITY GLASSMORPHISM (Exact Match with Reference Image) */}
      <section className="relative w-full min-h-[96vh] flex items-center justify-center p-3 sm:p-6 lg:p-10 overflow-hidden bg-slate-900">
        
        {/* Pristine Raw GNSS Field Surveying Image Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/68973cf8-82cf-49c4-9982-465338b048b0.png"
            alt="Licensed Digital Land Surveying Field Operations"
            fill
            priority
            sizes="100vw"
            className="w-full h-full object-cover object-[68%_center] sm:object-center"
          />
          {/* Natural soft ambient gradient preserving daylight photography */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 pointer-events-none" />
        </div>

        {/* Floating Glassmorphism Hero Card Container */}
        <div className="container mx-auto max-w-7xl relative z-10 w-full my-auto">
          <FadeIn duration={0.8}>
            <div className="glass-frost-hero rounded-[32px] sm:rounded-[40px] lg:rounded-[48px] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              
              {/* Main Content Area */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Content Column */}
                <div className="lg:col-span-7 xl:col-span-8 space-y-5 sm:space-y-6">
                  
                  {/* Brand Tagline Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-emerald-500/40 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-emerald-400 font-bold">ODYSSEY SURVEY</span>
                    <span className="text-white/40">•</span>
                    <span className="text-slate-200">Digital Land Surveyors</span>
                  </div>

                  {/* Hero Headline */}
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-md">
                    Precision Today,<br />
                    Better Tomorrow
                  </h1>

                  {/* Subtext */}
                  <p className="text-sm sm:text-base lg:text-lg text-white/95 max-w-xl leading-relaxed font-normal drop-shadow-sm">
                    Advanced surveying solutions using the latest technology for accurate and reliable results.
                  </p>

                  {/* 4 Feature Pills Panel */}
                  <div className="glass-pill-panel rounded-2xl p-4 max-w-xl grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 shadow-xl">
                    
                    <div className="flex flex-col items-center text-center p-2 rounded-xl hover:bg-white/10 transition-colors group">
                      <div className="w-12 h-12 rounded-full bg-white/20 border border-white/35 flex items-center justify-center text-white text-xl mb-2 shadow-inner group-hover:scale-110 transition-transform">
                        <FiCrosshair />
                      </div>
                      <div className="text-xs font-bold text-white leading-tight">High Accuracy</div>
                    </div>

                    <div className="flex flex-col items-center text-center p-2 rounded-xl hover:bg-white/10 transition-colors group">
                      <div className="w-12 h-12 rounded-full bg-white/20 border border-white/35 flex items-center justify-center text-white text-xl mb-2 shadow-inner group-hover:scale-110 transition-transform">
                        <FiRadio />
                      </div>
                      <div className="text-xs font-bold text-white leading-tight">GNSS Technology</div>
                    </div>

                    <div className="flex flex-col items-center text-center p-2 rounded-xl hover:bg-white/10 transition-colors group">
                      <div className="w-12 h-12 rounded-full bg-white/20 border border-white/35 flex items-center justify-center text-white text-xl mb-2 shadow-inner group-hover:scale-110 transition-transform">
                        <FiMapPin />
                      </div>
                      <div className="text-xs font-bold text-white leading-tight">Data You Can Trust</div>
                    </div>

                    <div className="flex flex-col items-center text-center p-2 rounded-xl hover:bg-white/10 transition-colors group">
                      <div className="w-12 h-12 rounded-full bg-white/20 border border-white/35 flex items-center justify-center text-white text-xl mb-2 shadow-inner group-hover:scale-110 transition-transform">
                        <FiBarChart2 />
                      </div>
                      <div className="text-xs font-bold text-white leading-tight">Smart Solutions</div>
                    </div>

                  </div>

                  {/* Action Button (Our Services ->) */}
                  <div className="pt-2">
                    <Link
                      href="/services"
                      className="glass-btn-primary px-8 py-3.5 rounded-full text-white font-semibold text-sm sm:text-base inline-flex items-center gap-3 group shadow-lg"
                    >
                      <span>Our Services</span>
                      <FiArrowRight className="group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>

                </div>

                {/* Right Column / Floating Badge */}
                <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-end items-start lg:items-end space-y-4 min-h-[160px]">
                  
                  {/* Floating Badge */}
                  <div className="glass-badge-dark px-5 py-3.5 rounded-2xl text-white shadow-2xl flex items-center gap-3.5 max-w-xs">
                    <div className="w-10 h-10 rounded-full bg-white/20 border border-white/35 flex items-center justify-center text-white shrink-0 shadow-inner">
                      <FiMapPin className="text-lg" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs sm:text-sm font-bold text-white">Surveying with precision</div>
                      <div className="text-[11px] text-white/80">Mapping the future</div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </FadeIn>
        </div>
      </section>


      {/* 2. STATS BAR WITH STAGGER ANIMATIONS */}
      <section className="bg-slate-950 text-white py-14 border-y border-slate-800 relative">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-15 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {COMPANY_STATS.map((stat, i) => (
              <StaggerItem key={i} direction="up">
                <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-1.5 hover:border-emerald-500/40 transition-colors group">
                  <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono tracking-tight group-hover:scale-105 transition-transform duration-200">
                    <AnimatedCounter
                      target={stat.numericValue ?? 0}
                      decimals={stat.decimals ?? 0}
                      suffix={stat.suffix ?? ""}
                      duration={2.2}
                    />
                  </div>
                  <div className="text-sm font-semibold text-slate-100">{stat.label}</div>
                  <div className="text-xs text-slate-400">{stat.subtext}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 3. DEDICATED SURVEYED PLACE IMAGE SHOWCASE SECTION */}
      <SurveyedSitesShowcase />

      {/* 4. 7 CORE HIGH-VALUE SERVICES GRID WITH SCROLL REVEAL */}
      <section className="py-24 bg-slate-50/60 relative" id="services">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
              <FiGrid className="text-sm" /> Full Geodetic Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Specialized Land Survey Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every survey is executed using multi-frequency satellite DGPS, 1-second total stations, and precision digital auto-levels with signed municipal certificates.
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {Object.values(SERVICES_DATA).map((service) => {
              const Icon = serviceIcons[service.slug] || FiCompass;
              return (
                <StaggerItem key={service.slug} direction="up">
                  <div className="glass-panel p-7 rounded-2xl border border-slate-200/80 hover-lift flex flex-col justify-between group transition-all duration-300 h-full">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                          <Icon />
                        </div>
                        <span className="px-2.5 py-1 rounded-md bg-slate-100 text-[10px] font-mono font-semibold text-slate-700 uppercase tracking-wider">
                          {service.turnaroundTime}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs font-mono text-emerald-600 font-semibold mt-1">
                          Accuracy: {service.accuracy}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {service.shortDesc}
                      </p>

                      <div className="space-y-1.5 pt-3 border-t border-slate-100">
                        {service.deliverables.slice(0, 2).map((del, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-500">
                            <FiCheckCircle className="text-emerald-500 text-sm flex-shrink-0" />
                            <span className="truncate">{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                      >
                        <span>Explore Service Details</span>
                        <FiArrowRight />
                      </Link>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

        </div>
      </section>

      {/* 5. INTERACTIVE BEFORE / AFTER SLIDER */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <ScaleIn duration={0.8}>
            <BeforeAfterSlider />
          </ScaleIn>
        </div>
      </section>

      {/* 6. OUR 4-STEP PRECISION ROADMAP WITH STAGGER ANIMATIONS */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-15 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          
          <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <FiCompass className="text-sm" /> Rigorous Engineering Workflow
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              How We Deliver Unassailable Accuracy
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              From historical title deed mathematical auditing to on-site laser staking and signed CAD stamping.
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Deed & Revenue Audit",
                desc: "We cross-reference your title deeds, village revenue sketches, and adjacent settlement records to establish historical boundary baselines."
              },
              {
                step: "02",
                title: "DGPS & Laser Capture",
                desc: "Our licensed crew mobilizes with dual-frequency RTK GNSS and 1-second total stations to capture thousands of georeferenced spatial vectors."
              },
              {
                step: "03",
                title: "CAD / Civil 3D Processing",
                desc: "Raw field vectors are adjusted in geodetic software to generate clean, layered AutoCAD DWG plans, 3D contours, and encroachment reports."
              }
            ].map((st, i) => (
              <StaggerItem key={i} direction="up">
                <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 relative group hover:border-emerald-500/50 transition-colors h-full">
                  <div className="text-3xl font-extrabold text-emerald-400 font-mono">
                    {st.step}
                  </div>
                  <h3 className="text-base font-bold text-white">{st.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* 7. FEATURED CASE STUDIES WITH SCROLL ENTRANCE */}
      <section className="py-24 bg-white" id="projects">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                <FiShield className="text-sm text-emerald-600" /> Proven Project Portfolio
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                Featured Case Studies
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 flex items-center gap-1.5"
            >
              <span>View All Projects & Case Studies</span>
              <FiArrowRight />
            </Link>
          </FadeIn>

          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.slice(0, 4).map((cs) => (
              <StaggerItem key={cs.id} direction="up">
                <div className="glass-panel rounded-2xl border border-slate-200/80 overflow-hidden flex flex-col justify-between group hover-lift transition-all duration-300 h-full">
                  <div className="p-7 space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 font-semibold">
                        {cs.category}
                      </span>
                      <span className="text-slate-500 font-medium flex items-center gap-1">
                        <FiMapPin className="text-emerald-600" /> {cs.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                      {cs.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cs.summary}
                    </p>

                    <div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-slate-100">
                      {cs.stats.map((st, idx) => (
                        <div key={idx} className="bg-slate-50 p-2 rounded-xl text-center border border-slate-100">
                          <div className="text-xs font-bold text-slate-900 font-mono">{st.value}</div>
                          <div className="text-[10px] text-slate-500">{st.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="px-7 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Tech: {cs.techUsed.slice(0, 2).join(", ")}</span>
                    <Link href="/projects" className="text-emerald-700 font-semibold hover:underline">
                      Read Case Study →
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* 8. SERVICE AREAS DIRECTORY */}
      <section className="py-24 bg-slate-50/60 border-t border-slate-200" id="areas">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
              <FiMapPin className="text-sm" /> Regional Coverage Across Kerala
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Service Areas & Local Survey Crews
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Active field teams deployed across major hubs with 24-hr on-site mobilization.
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_AREAS.map((area) => (
              <StaggerItem key={area.slug} direction="up">
                <Link
                  href={`/areas/${area.slug}`}
                  className="glass-panel p-6 rounded-2xl border border-slate-200/80 hover-lift hover:border-emerald-500/50 transition-all group flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {area.name}
                      </div>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 font-mono">
                        {area.activeCrews} Active Crews
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 line-clamp-2 mb-3 leading-relaxed">
                      {area.overview}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {area.subDistricts.slice(0, 4).map((dist, dIdx) => (
                        <span key={dIdx} className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                          {dist}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs font-semibold text-emerald-700 flex items-center justify-between pt-2 border-t border-slate-100">
                    <span>View Local Survey Hub & Crews</span>
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* 9. TESTIMONIALS & TRUST SIGNALS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold uppercase tracking-wider">
              <FiStar className="text-amber-500 fill-amber-500" /> 4.9 / 5 Rating (340+ Verified Reviews)
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Trusted by Leading Architects & Developers
            </h2>
          </FadeIn>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <StaggerItem key={idx} direction="up">
                <div className="glass-panel p-7 rounded-2xl border border-slate-200/80 flex flex-col justify-between space-y-5 h-full">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <FiStar key={i} className="fill-amber-400 text-xs" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-slate-900">{t.name}</div>
                      <div className="text-slate-500">{t.role}</div>
                    </div>
                    <span className="text-emerald-700 font-semibold">{t.location}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* 10. FAQ ACCORDION */}
      <section className="py-20 bg-slate-50/60 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <FadeIn>
            <FAQAccordion items={homeFaqs} />
          </FadeIn>
        </div>
      </section>

      {/* 11. FINAL CONVERSION BANNER */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none" />
        <FadeIn className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10 space-y-6">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Ready to Verify Your Land with Millimeter Precision?
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Speak directly with our senior geodetic surveyor. Get a rapid technical assessment and 24-hr on-site mobilization.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 justify-center pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-xl transition-all"
            >
              Request Free Site Assessment
            </Link>

            <a
              href="tel:+917994776610"
              className="px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 transition-all flex items-center justify-center gap-2 font-mono"
            >
              <FiPhone className="text-emerald-400" />
              <span>Call +91 79947 76610</span>
            </a>
          </div>

        </FadeIn>
      </section>

    </main>
  );
}
