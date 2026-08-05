"use client";

import Link from "next/link";
import { 
  FiShield, 
  FiAward
} from "react-icons/fi";
import { COMPANY_STATS } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export default function AboutPage() {
  const leadership = [
    {
      name: "Er. Rajesh K. Varma",
      role: "Founder & Chief Geodetic Surveyor",
      creds: "B.Tech Civil, M.Tech Geoinformatics, RICS Member",
      bio: "22+ years of geodetic engineering leadership, having spearheaded national highway georeferencing and high-precision cadastral boundary surveys across India.",
    },
    {
      name: "Er. Amit S. Deshmukh",
      role: "Head of Geodetic Surveying & CAD Engineering",
      creds: "B.Tech Civil, Certified Geodesy & GIS Specialist",
      bio: "Specialist in multi-constellation RTK GNSS networks, sub-millimeter digital leveling, and 3D digital terrain classification for infrastructure masterplans.",
    },
    {
      name: "Adv. Sneha N. Rao",
      role: "Senior Real Estate & Title Legal Advisor",
      creds: "LL.M Property Law, Revenue Settlement Expert",
      bio: "Expert in revenue village settlement records, boundary dispute arbitration, title deed reconciliation, and statutory municipal setback regulations.",
    },
  ];

  const certifications = [
    {
      title: "Licensed Land Surveyors",
      org: "State Revenue & Municipal Registry",
      desc: "Authorized to issue stamped and certified cadastral survey plans admissible in municipal bodies and civil courts.",
    },
    {
      title: "ISO 9001:2015 Quality Certified",
      org: "International Standards Organization",
      desc: "Adherence to rigorous calibration, baseline adjustment, and multi-tier quality assurance standards.",
    },
    {
      title: "Licensed Geodetic Surveyors",
      org: "State Land Records & Survey Department",
      desc: "Authorized survey engineers certified for revenue cadastral boundary demarcation and statutory town planning approvals.",
    },
    {
      title: "RICS Professional Standards",
      org: "Royal Institution of Chartered Surveyors",
      desc: "Commitment to world-class geospatial integrity, ethical transparency, and zero-compromise precision.",
    },
  ];

  const fleet = [
    {
      name: "Trimble R12i RTK GNSS Receiver",
      type: "Satellite Positioning Base & Rover",
      specs: "Multi-constellation (GPS, GLONASS, Galileo, BeiDou), ProPoint engine with ±5mm real-time kinematic accuracy.",
    },
    {
      name: "Leica TS16 1-Second Robotic Total Station",
      type: "Optical & Reflectorless EDM",
      specs: "Sub-millimeter EDM measuring engine (±1mm + 1.5ppm) with automatic target aiming and laser tracking.",
    },
    {
      name: "Trimble S7 Total Station with VISION Scanning",
      type: "Robotic EDM & Laser Profiler",
      specs: "1-second angular accuracy with high-speed prism search and sub-millimeter reflectorless distance measurement.",
    },
    {
      name: "Leica LS15 High-Precision Digital Level",
      type: "Vertical Barcode Leveling",
      specs: "0.2mm standard deviation per km double-run leveling for permanent Mean Sea Level datum benchmark transfer.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50/70">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-white py-20 border-b border-slate-200 relative overflow-hidden">
        <FadeIn className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <FiShield className="text-sm text-emerald-600" /> 5+ Years of Geodetic Excellence
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Setting the Benchmark in <br />
            <span className="text-gradient-brand">
              Precision Land Surveying
            </span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Founded with a singular mission: to eliminate boundary ambiguity, construction rework, and land disputes by uniting modern satellite telemetry with unassailable surveying integrity.
          </p>
        </FadeIn>
      </section>

      {/* Company Stats Grid */}
      <section className="bg-slate-950 text-white py-12 border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {COMPANY_STATS.map((stat, i) => (
              <StaggerItem key={i} direction="up">
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-1 hover:border-emerald-500/40 transition-colors group">
                  <div className="text-3xl font-extrabold text-emerald-400 font-mono group-hover:scale-105 transition-transform duration-200">
                    <AnimatedCounter
                      target={stat.numericValue ?? 0}
                      decimals={stat.decimals ?? 0}
                      suffix={stat.suffix ?? ""}
                      duration={2.2}
                    />
                  </div>
                  <div className="text-xs font-semibold text-white">{stat.label}</div>
                  <div className="text-[11px] text-slate-400">{stat.subtext}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-20 space-y-20">
        
        {/* Our Story & Philosophy */}
        <FadeIn className="space-y-6">
          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Our Journey & Engineering Philosophy
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">Bridging the gap between paper deeds and digital reality.</p>
          </div>

          <div className="prose max-w-none text-slate-700 space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              For decades, the surveying sector was burdened by outdated manual optical instruments, slow turnaround times, and lack of mathematical rigor. Landowners and architects routinely discovered discrepancies between registered paper deeds and actual on-ground boundaries only after construction had commenced.
            </p>
            <p>
              Odyssey Survey was established to revolutionize land surveying by introducing sub-centimeter multi-constellation RTK GNSS receivers, robotic total stations, and precision digital elevation modeling.
            </p>
            <p>
              Today, Odyssey Survey operates active field crews across major metropolitan and infrastructure corridors, serving prestigious architectural studios, Tier-1 EPC infrastructure developers, real estate promoters, and private landowners.
            </p>
          </div>
        </FadeIn>

        {/* Certifications & Trust Badges */}
        <section className="space-y-6">
          <FadeIn className="space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Official Certifications & Accreditations
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">Our reports and plans are legally recognized by municipal corporations and courts.</p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <StaggerItem key={idx} direction="up">
                <div className="glass-panel p-7 rounded-2xl border border-slate-200/80 bg-white space-y-3 shadow-sm hover-lift h-full">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-lg">
                    <FiAward />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{cert.title}</h3>
                  <div className="text-xs font-semibold text-emerald-700">{cert.org}</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{cert.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Precision Equipment Fleet */}
        <section className="space-y-6">
          <FadeIn className="space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              State-of-the-Art Surveying Fleet
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">We invest in the world&apos;s most advanced geodetic hardware and processing software.</p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {fleet.map((item, idx) => (
              <StaggerItem key={idx} direction="up">
                <div className="glass-panel p-6 rounded-2xl bg-white border border-slate-200/80 space-y-2.5 hover-lift h-full">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-semibold text-emerald-700 uppercase tracking-wider">{item.type}</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{item.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.specs}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Leadership Team */}
        <section className="space-y-6">
          <FadeIn className="space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Surveyor Leadership & Technical Experts
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">Decades of combined field experience in geodetic science and property law.</p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((leader, idx) => (
              <StaggerItem key={idx} direction="up">
                <div className="glass-panel p-6 rounded-2xl border border-slate-200/80 bg-white space-y-4 shadow-sm flex flex-col justify-between hover-lift h-full">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-emerald-400 flex items-center justify-center font-bold text-lg shadow-sm border border-slate-800">
                      {leader.name.split(" ")[1]?.charAt(0) || "O"}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{leader.name}</h3>
                      <div className="text-xs text-emerald-700 font-semibold">{leader.role}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{leader.creds}</div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{leader.bio}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* CTA Banner */}
        <FadeIn className="p-8 sm:p-12 rounded-2xl bg-slate-950 text-white text-center space-y-5 border border-slate-800">
          <h2 className="text-2xl sm:text-3xl font-bold">Partner with Odyssey Survey for Your Next Project</h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Experience the peace of mind that comes with certified, millimeter-accurate land survey deliverables.
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center pt-2">
            <Link
              href="/contact"
              className="px-7 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg transition-colors"
            >
              Get Free Site Assessment
            </Link>
            <Link
              href="/services"
              className="px-7 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs border border-slate-700 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </FadeIn>

      </div>

    </main>
  );
}
