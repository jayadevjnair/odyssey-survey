"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiLayers, 
  FiCheckCircle, 
  FiCrosshair, 
  FiActivity, 
  FiPlay, 
  FiPause,
  FiMapPin,
  FiShield
} from "react-icons/fi";

interface ProjectDataset {
  id: string;
  title: string;
  category: string;
  location: string;
  rawImage: string;
  cadImage: string;
  rawLabel: string;
  cadLabel: string;
  coordinates: {
    datum: string;
    baseElevation: string;
    contourInterval: string;
    accuracy: string;
    baseEasting: number;
    baseNorthing: number;
  };
  pins: Array<{
    id: number;
    x: number; // percentage
    y: number; // percentage
    label: string;
    elevation: string;
    type: string;
  }>;
}

const DATASETS: ProjectDataset[] = [
  {
    id: "masterplan",
    title: "45-Acre Commercial Tech Park",
    category: "Topographic & CAD Overlay",
    location: "Bangalore Outer Ring Corridor",
    rawImage: "/cad-site-raw.png",
    cadImage: "/cad-site-dwg.png",
    rawLabel: "Raw Ground Survey & Elevation Points",
    cadLabel: "Civil 3D Contour & Boundary Plan",
    coordinates: {
      datum: "WGS84 / UTM Zone 43N",
      baseElevation: "+42.85m MSL",
      contourInterval: "0.50m Contours",
      accuracy: "±3mm Real-Time RTK",
      baseEasting: 428940,
      baseNorthing: 2109380,
    },
    pins: [
      { id: 1, x: 28, y: 36, label: "TBM-01 Primary Geodetic Benchmark", elevation: "+44.12m", type: "DGPS Control" },
      { id: 2, x: 62, y: 48, label: "CP-04 Proposed Core Building Corner", elevation: "+42.80m", type: "Setting Out" },
      { id: 3, x: 78, y: 24, label: "BP-09 Boundary Stone Demarcation", elevation: "+46.50m", type: "Cadastral Peg" },
    ]
  },
  {
    id: "hillside",
    title: "Mountain Resort Ridge & Valley",
    category: "Digital Elevation Model (DEM)",
    location: "Western Ghats Slopes, Kerala",
    rawImage: "/hillside-raw.png",
    cadImage: "/hillside-cad.png",
    rawLabel: "Steep Terrain Field Measurement",
    cadLabel: "3D Elevation Contour Heatmap",
    coordinates: {
      datum: "WGS84 / UTM Zone 43N",
      baseElevation: "+892.40m MSL",
      contourInterval: "0.25m Micro-Contours",
      accuracy: "±5mm Geodetic GNSS",
      baseEasting: 462100,
      baseNorthing: 1064200,
    },
    pins: [
      { id: 1, x: 35, y: 30, label: "Ridge Apex Control Station", elevation: "+945.20m", type: "High Point" },
      { id: 2, x: 55, y: 65, label: "Natural Drainage Flow Channel", elevation: "+862.10m", type: "Invert Level" },
      { id: 3, x: 80, y: 42, label: "Retaining Wall Alignment Axis", elevation: "+910.80m", type: "Structural Line" },
    ]
  },
  {
    id: "subdivision",
    title: "Greenfield Residential Subdivision",
    category: "Cadastral Layout & Demarcation",
    location: "Kottayam Township Development",
    rawImage: "/subdivision-raw.png",
    cadImage: "/subdivision-cad.png",
    rawLabel: "Pre-Development Land Parcel",
    cadLabel: "Stamped AutoCAD Layout & Plots",
    coordinates: {
      datum: "WGS84 / UTM Zone 43N",
      baseElevation: "+28.30m MSL",
      contourInterval: "1.00m Graded Contours",
      accuracy: "±2mm Robotic TS",
      baseEasting: 445200,
      baseNorthing: 1058900,
    },
    pins: [
      { id: 1, x: 22, y: 55, label: "Sector Entry Road Baseline", elevation: "+27.90m", type: "Centerline" },
      { id: 2, x: 48, y: 40, label: "Plot #14 Boundary Stone Peg", elevation: "+28.60m", type: "Legal Boundary" },
      { id: 3, x: 74, y: 60, label: "Municipal Drainage Connection", elevation: "+26.80m", type: "Culvert Datum" },
    ]
  },
];

interface BeforeAfterSliderProps {
  title?: string;
  subtitle?: string;
}

export function BeforeAfterSlider({
  title = "Precision Transformed: Raw Site vs. Layered CAD Deliverable",
  subtitle = "Interact with our real-world geodetic datasets: slide to inspect how field DGPS and robotic total station measurements are processed into millimeter-accurate AutoCAD .DWG, 3D contours, and boundary demarcations."
}: BeforeAfterSliderProps) {
  const [activeDatasetIndex, setActiveDatasetIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoScanning, setIsAutoScanning] = useState(false);
  const [showReticle, setShowReticle] = useState(true);
  const [showPins, setShowPins] = useState(true);
  const [activePin, setActivePin] = useState<number | null>(null);
  const [mouseTelemetry, setMouseTelemetry] = useState<{ xPct: number; yPct: number; easting: string; northing: string; elevation: string } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const autoScanDirection = useRef<"left" | "right">("right");
  const dataset = DATASETS[activeDatasetIndex];

  // Drag handler
  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  }, []);

  const handleMouseDown = () => {
    setIsDragging(true);
    setIsAutoScanning(false);
  };

  // Mouse telemetry tracker
  const handleMouseMoveTelemetry = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const yPct = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));

    const easting = (dataset.coordinates.baseEasting + (xPct * 2.4)).toFixed(3);
    const northing = (dataset.coordinates.baseNorthing + (yPct * 2.1)).toFixed(3);
    const elevNum = parseFloat(dataset.coordinates.baseElevation.replace(/[^0-9.]/g, ""));
    const dynamicElev = (elevNum + (Math.sin(xPct / 10) * 2.5) + (Math.cos(yPct / 10) * 1.8)).toFixed(2);

    setMouseTelemetry({
      xPct,
      yPct,
      easting,
      northing,
      elevation: `+${dynamicElev}m MSL`,
    });

    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  // Global mouse / touch listeners for smooth dragging
  useEffect(() => {
    const handleGlobalMouseMove = (e: globalThis.MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const handleGlobalTouchMove = (e: globalThis.TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    };

    const handleGlobalMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleGlobalMouseMove);
      window.addEventListener("mouseup", handleGlobalMouseUp);
      window.addEventListener("touchmove", handleGlobalTouchMove);
      window.addEventListener("touchend", handleGlobalMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("touchmove", handleGlobalTouchMove);
      window.removeEventListener("touchend", handleGlobalMouseUp);
    };
  }, [isDragging, handleMove]);

  // Auto-scan oscillation effect
  useEffect(() => {
    if (!isAutoScanning) return;
    const interval = setInterval(() => {
      setSliderPosition((prev) => {
        if (prev >= 85) {
          autoScanDirection.current = "left";
          return 84.5;
        } else if (prev <= 15) {
          autoScanDirection.current = "right";
          return 15.5;
        }
        return autoScanDirection.current === "right" ? prev + 0.4 : prev - 0.4;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [isAutoScanning]);

  return (
    <section className="w-full max-w-6xl mx-auto space-y-8" id="cad-studio">
      
      {/* Studio Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-slate-200">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <FiLayers className="text-sm text-emerald-600" /> Geodetic Engineering Studio
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Action Controls & Auto-Scanner */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            onClick={() => setIsAutoScanning(!isAutoScanning)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
              isAutoScanning
                ? "bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-500/20"
                : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
            }`}
          >
            {isAutoScanning ? <FiPause className="text-sm" /> : <FiPlay className="text-sm" />}
            <span>{isAutoScanning ? "Stop Auto-Sweep" : "Auto-Sweep CAD"}</span>
          </button>

          <button
            onClick={() => setShowReticle(!showReticle)}
            className={`p-2 rounded-xl text-xs font-medium border transition-colors ${
              showReticle ? "bg-slate-900 text-emerald-400 border-slate-900" : "bg-white text-slate-600 border-slate-300 hover:bg-slate-50"
            }`}
            title="Toggle Surveyor Reticle"
          >
            <FiCrosshair className="text-base" />
          </button>

          <button
            onClick={() => setShowPins(!showPins)}
            className={`p-2 rounded-xl text-xs font-medium border transition-colors ${
              showPins ? "bg-slate-900 text-emerald-400 border-slate-900" : "bg-white text-slate-600 border-slate-300 hover:bg-slate-50"
            }`}
            title="Toggle Benchmark Pins"
          >
            <FiMapPin className="text-base" />
          </button>
        </div>
      </div>

      {/* Project Dataset Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {DATASETS.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveDatasetIndex(idx);
              setActivePin(null);
            }}
            className={`p-4 rounded-2xl text-left border transition-all duration-300 ${
              activeDatasetIndex === idx
                ? "bg-slate-900 text-white border-slate-800 shadow-lg ring-2 ring-emerald-500/40"
                : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50/80"
            }`}
          >
            <div className="flex items-center justify-between text-[11px] font-mono mb-1">
              <span className={activeDatasetIndex === idx ? "text-emerald-400 font-bold" : "text-emerald-600 font-semibold"}>
                Dataset #{idx + 1}
              </span>
              <span className={activeDatasetIndex === idx ? "text-slate-400" : "text-slate-500"}>
                {item.category}
              </span>
            </div>
            <div className="font-bold text-sm truncate">{item.title}</div>
            <div className={`text-xs mt-1 truncate ${activeDatasetIndex === idx ? "text-slate-400" : "text-slate-500"}`}>
              {item.location}
            </div>
          </button>
        ))}
      </div>

      {/* Main Interactive Visualizer Canvas */}
      <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl">
        
        {/* Top Floating Status Bar */}
        <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
          {/* Left Pill: Raw Orthophoto Tag */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/80 text-white text-[11px] font-mono shadow-lg pointer-events-auto">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-semibold">{dataset.rawLabel}</span>
          </div>

          {/* Center Coordinates & Elevation Telemetry */}
          {mouseTelemetry && (
            <div className="hidden lg:flex items-center gap-4 px-4 py-1.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-[11px] font-mono shadow-lg">
              <span>E: <strong className="text-white">{mouseTelemetry.easting}m</strong></span>
              <span>N: <strong className="text-white">{mouseTelemetry.northing}m</strong></span>
              <span>Z: <strong className="text-emerald-400">{mouseTelemetry.elevation}</strong></span>
              <span className="text-slate-400 text-[10px]">| {dataset.coordinates.accuracy}</span>
            </div>
          )}

          {/* Right Pill: CAD Deliverable Tag */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-emerald-500/50 text-white text-[11px] font-mono shadow-lg pointer-events-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="font-semibold text-emerald-300">{dataset.cadLabel}</span>
          </div>
        </div>

        {/* Viewport Frame */}
        <div
          ref={containerRef}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/10] select-none cursor-ew-resize overflow-hidden"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          onMouseMove={handleMouseMoveTelemetry}
          onMouseLeave={() => setMouseTelemetry(null)}
        >
          {/* LAYER 1: Full Underneath Image (AutoCAD DWG / Contours Deliverable) */}
          <div className="absolute inset-0 bg-slate-950">
            <Image
              src={dataset.cadImage}
              alt={`${dataset.title} CAD Deliverable`}
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-cover"
            />
          </div>

          {/* LAYER 2: Clipped Top Image (Raw Field Terrain Photography) */}
          <div
            className="absolute inset-0 overflow-hidden bg-slate-950 pointer-events-none"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <Image
              src={dataset.rawImage}
              alt={`${dataset.title} Raw Field Terrain Photography`}
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-cover"
            />
          </div>

          {/* SURVEY CONTROL BENCHMARK PINS */}
          {showPins && dataset.pins.map((pin) => {
            const isVisibleOnRaw = pin.x < sliderPosition;
            return (
              <div
                key={pin.id}
                style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-25 pointer-events-auto"
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePin(activePin === pin.id ? null : pin.id);
                }}
              >
                <button 
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-[10px] font-bold shadow-lg transition-transform hover:scale-125 ${
                    isVisibleOnRaw
                      ? "bg-amber-500 text-slate-950 border-2 border-white ring-2 ring-amber-500/50"
                      : "bg-emerald-500 text-slate-950 border-2 border-white ring-2 ring-emerald-500/50"
                  }`}
                >
                  {pin.id}
                </button>

                {/* Benchmark Tooltip Card */}
                <AnimatePresence>
                  {activePin === pin.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 10 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-3 rounded-xl bg-slate-950/95 backdrop-blur-md border border-emerald-500/60 text-white shadow-2xl text-xs space-y-1 z-30"
                    >
                      <div className="font-bold text-emerald-400 flex items-center justify-between">
                        <span>{pin.type}</span>
                        <span className="text-[10px] bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-600/40 text-emerald-300">
                          {pin.elevation}
                        </span>
                      </div>
                      <div className="text-slate-300 font-medium text-[11px] leading-tight">{pin.label}</div>
                      <div className="text-[10px] text-slate-400 font-mono pt-1">
                        Coordinates Verified via Trimble RTK
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* DRAGGABLE DIVIDER LINE & HANDLE */}
          <div
            className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_20px_rgba(16,185,129,1)] z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Center Handle Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-950 border-2 border-emerald-400 shadow-2xl flex items-center justify-center text-white pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
              <div className="flex items-center gap-0.5 text-xs text-emerald-400 font-bold">
                <span>◀</span>
                <span className="text-[9px] text-white">|</span>
                <span>▶</span>
              </div>
            </div>

            {/* Top & Bottom Notch Badges */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-900 text-[10px] font-mono font-bold text-emerald-400 border border-slate-700 shadow whitespace-nowrap">
              {Math.round(sliderPosition)}% SPLIT
            </div>
          </div>

          {/* Mouse Crosshair Guide on Hover */}
          {showReticle && mouseTelemetry && (
            <div
              className="absolute pointer-events-none border border-emerald-400/30 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center"
              style={{ left: `${mouseTelemetry.xPct}%`, top: `${mouseTelemetry.yPct}%` }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
          )}

        </div>

        {/* Bottom Geodetic Technical Metadata Bar */}
        <div className="p-4 sm:p-5 bg-slate-900/90 border-t border-slate-800 text-xs text-slate-300 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-[11px]">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500">Datum:</span>
              <span className="text-white font-semibold">{dataset.coordinates.datum}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500">Base MSL:</span>
              <span className="text-emerald-400 font-semibold">{dataset.coordinates.baseElevation}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500">Contours:</span>
              <span className="text-white font-semibold">{dataset.coordinates.contourInterval}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500">Tolerance:</span>
              <span className="text-emerald-400 font-semibold">{dataset.coordinates.accuracy}</span>
            </div>
          </div>

          {/* Quick Preset Buttons */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-slate-500 mr-1 font-mono">View:</span>
            {[
              { label: "100% Field Data", pos: 100 },
              { label: "50/50 Split", pos: 50 },
              { label: "100% CAD", pos: 0 },
            ].map((preset) => (
              <button
                key={preset.label}
                onClick={() => {
                  setSliderPosition(preset.pos);
                  setIsAutoScanning(false);
                }}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-colors ${
                  Math.round(sliderPosition) === preset.pos
                    ? "bg-emerald-600 text-white font-bold"
                    : "bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Engineering Value Proposition Badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 pt-2">
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-1 hover-lift">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center text-base mb-2">
            <FiCheckCircle />
          </div>
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Multi-Layered .DWG / .DXF</h4>
          <p className="text-[11px] text-slate-500 leading-snug">
            Organized in 18+ industry CAD layers (Contours, Boundary, Setbacks, Utilities).
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-1 hover-lift">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center text-base mb-2">
            <FiShield />
          </div>
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Legal Surveyor Stamp</h4>
          <p className="text-[11px] text-slate-500 leading-snug">
            Certified by licensed surveyors with verified revenue boundary reconciliation.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-1 hover-lift">
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-emerald-400 flex items-center justify-center text-base mb-2">
            <FiCrosshair />
          </div>
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Sub-Centimeter RTK GNSS</h4>
          <p className="text-[11px] text-slate-500 leading-snug">
            Georeferenced to national geodetic datums with permanent on-ground benchmark pillars.
          </p>
        </div>
      </div>

    </section>
  );
}
