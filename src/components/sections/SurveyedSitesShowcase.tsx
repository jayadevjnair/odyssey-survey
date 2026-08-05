"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  FiMapPin, 
  FiCrosshair, 
  FiCheckCircle, 
  FiArrowRight,
} from "react-icons/fi";
import { FadeIn, SlideIn } from "@/components/ui/ScrollReveal";

interface SurveySite {
  id: string;
  title: string;
  location: string;
  district: string;
  areaAcreage: string;
  category: string;
  imageSrc: string;
  cadOverlayAvailable: boolean;
  equipmentUsed: string;
  accuracy: string;
  deliverables: string[];
  description: string;
  coordinates: {
    lat: string;
    lng: string;
    utm: string;
    datum: string;
  };
}

const SURVEYED_SITES: SurveySite[] = [
  {
    id: "site-1",
    title: "37-Acre Ancestral Plantation Estate Boundary Demarcation & Contour Survey",
    location: "Ponkunnam - Kanjirappally Corridor",
    district: "Kottayam District",
    areaAcreage: "37.5 Acres",
    category: "Cadastral Boundary & Topography",
    imageSrc: "/survey-aerial.png",
    cadOverlayAvailable: true,
    equipmentUsed: "Dual-Frequency RTK DGPS + Leica Robotic Total Station",
    accuracy: "±2mm Horizontal / ±5mm Vertical",
    deliverables: ["Certified Boundary Demarcation Map", "0.5m Contour Elevation Model", "AutoCAD 2024 .DWG Layered Blueprint"],
    description: "High-precision DGPS satellite georeferencing and electronic total station boundary verification across 37.5 acres of undulating plantation terrain. Successfully reconciled historical village revenue sketches with physical boundary pins and issued certified survey maps for estate partition.",
    coordinates: {
      lat: "9°33'42.1\" N",
      lng: "76°45'18.8\" E",
      utm: "UTM Zone 43N",
      datum: "WGS 84 / MSL Elevation"
    }
  },
  {
    id: "site-2",
    title: "Commercial Multi-Story Hospital Setting-Out & Column Grid Alignment",
    location: "Main Road, Pala Hub",
    district: "Kottayam District",
    areaAcreage: "4.8 Acres",
    category: "Building Setting Out & Structural Staking",
    imageSrc: "/survey-field.png",
    cadOverlayAvailable: true,
    equipmentUsed: "Leica TS16 1-Second Robotic Total Station",
    accuracy: "±1.0mm Sub-Millimeter Tolerance",
    deliverables: ["Column Grid Centerline Staking", "Excavation As-Built Report", "Municipal Sanction CAD"],
    description: "Laser-guided foundation grid staking and vertical column alignment for an 8-story commercial hospital complex. Zero deviation achieved on 144 structural column baselines.",
    coordinates: {
      lat: "9°42'11.5\" N",
      lng: "76°41'02.3\" E",
      utm: "UTM Zone 43N",
      datum: "Everest 1830 / Local Grid"
    }
  },
  {
    id: "site-3",
    title: "High-Range Hill Slope & Undulating Terrain DGPS Topographic Survey",
    location: "Vagamon - Peermade Hill Range Corridor",
    district: "Idukki & Kottayam Highland Border",
    areaAcreage: "65.0 Acres Mountainous Terrain",
    category: "Highland DGPS & Hill Topography",
    imageSrc: "/hillside-raw.png",
    cadOverlayAvailable: true,
    equipmentUsed: "Dual-Frequency RTK DGPS (Base & Rover) + Multi-GNSS Constellation",
    accuracy: "±5mm Elevation / Sub-Centimeter Geodetic Ground Control",
    deliverables: ["Civil 3D Surface (.LandXML)", "0.5m High-Density Contour Map", "Slope Stability & Ravine Gradient Profiles"],
    description: "Precision multi-frequency RTK DGPS topographic survey across steep 35° gradient slopes, dense foliage canopy, and natural drainage ravines with millimeter geodetic elevation control.",
    coordinates: {
      lat: "9°41'18.2\" N",
      lng: "76°54'35.6\" E",
      utm: "UTM Zone 43N",
      datum: "WGS 84 / MSL Orthometric Elevation"
    }
  }
];

export function SurveyedSitesShowcase() {
  const [activeSiteIndex, setActiveSiteIndex] = useState(0);

  const activeSite = SURVEYED_SITES[activeSiteIndex];

  return (
    <section className="py-24 bg-slate-925 text-white relative overflow-hidden border-t border-slate-800" id="surveyed-sites">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <FiCrosshair className="text-sm" />
              <span>Real Field Survey Portfolio</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Surveyed Site Photographs & Digital Deliverables
            </h2>
            
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Inspect authentic high-resolution field photographs and engineering CAD datasets captured on-site by our certified surveying crews across Kerala.
            </p>
          </div>

          {/* Site Selector Tabs */}
          <div className="flex flex-wrap gap-2 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
            {SURVEYED_SITES.map((site, idx) => (
              <button
                key={site.id}
                onClick={() => setActiveSiteIndex(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  activeSiteIndex === idx
                    ? "bg-emerald-600 text-white font-semibold shadow-md shadow-emerald-600/20"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                }`}
              >
                Project #{idx + 1}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Main Showcase Grid with SlideIn Animations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: High-Resolution Surveyed Place Image Frame */}
          <SlideIn direction="left" duration={0.8} className="lg:col-span-7 flex flex-col">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl group">
              
              {/* Main Image - Pure Unobstructed Field Photograph */}
              <Image
                src={activeSite.imageSrc}
                alt={activeSite.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Top Floating Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-xs font-medium text-slate-200">
                  <FiMapPin className="text-emerald-400 text-sm" />
                  <span>{activeSite.location}</span>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-xs font-mono text-slate-300 shadow-lg">
                  <FiCheckCircle className="text-emerald-400 text-xs" />
                  <span>High-Res Field Photo</span>
                </div>
              </div>

              {/* Bottom Telemetry Stamp */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono z-20">
                <div className="text-slate-300">
                  LAT: <span className="text-emerald-400">{activeSite.coordinates.lat}</span> &bull; LNG: <span className="text-emerald-400">{activeSite.coordinates.lng}</span>
                </div>
                <div className="text-slate-400">
                  DATUM: <span className="text-slate-200">{activeSite.coordinates.datum}</span>
                </div>
              </div>

            </div>

            {/* Thumbnail Navigation Bar */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {SURVEYED_SITES.map((site, i) => (
                <button
                  key={site.id}
                  onClick={() => setActiveSiteIndex(i)}
                  className={`relative aspect-[16/9] rounded-xl overflow-hidden border-2 transition-all ${
                    activeSiteIndex === i
                      ? "border-emerald-500 shadow-md shadow-emerald-500/20"
                      : "border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-700"
                  }`}
                >
                  <Image
                    src={site.imageSrc}
                    alt={site.title}
                    fill
                    sizes="30vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 p-2 flex items-end">
                    <span className="text-[10px] font-mono font-semibold text-white truncate relative z-10">
                      {site.district}
                    </span>
                  </div>
                </button>
              ))}
            </div>

          </SlideIn>

          {/* Right: Technical Field Data & Deliverables */}
          <SlideIn direction="right" duration={0.8} className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-slate-900/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-800">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2.5 py-1 rounded-md bg-emerald-950 border border-emerald-500/30 text-emerald-400 font-semibold">
                  {activeSite.category}
                </span>
                <span className="text-slate-400">
                  Acreage: <strong className="text-white">{activeSite.areaAcreage}</strong>
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                {activeSite.title}
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {activeSite.description}
              </p>

              {/* Technical Specifications Matrix */}
              <div className="space-y-2 pt-3 border-t border-slate-800 text-xs font-mono">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Geodetic Instrument:</span>
                  <span className="text-slate-200 text-right">{activeSite.equipmentUsed}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Achieved Accuracy:</span>
                  <span className="text-emerald-400 font-bold">{activeSite.accuracy}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Grid Projection:</span>
                  <span className="text-slate-200">{activeSite.coordinates.utm}</span>
                </div>
              </div>

              {/* Stamped Deliverables List */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Client Deliverables Issued:
                </div>
                <div className="space-y-1.5">
                  {activeSite.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <FiCheckCircle className="text-emerald-400 text-sm flex-shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="/contact"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs text-center shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Request Survey for Your Site</span>
                <FiArrowRight />
              </Link>
            </div>

          </SlideIn>

        </div>

      </div>
    </section>
  );
}
