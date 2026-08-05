"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  FiSliders, 
  FiClock, 
  FiCheckCircle, 
  FiArrowRight, 
  FiFileText, 
  FiCompass,
  FiMapPin
} from "react-icons/fi";

export function CostEstimator() {
  const [areaSize, setAreaSize] = useState<number>(2);
  const [unit, setUnit] = useState<"acres" | "sqft" | "gunthas">("acres");
  const [surveyType, setSurveyType] = useState<string>("topographical-survey");
  const [terrain, setTerrain] = useState<"flat" | "moderate" | "steep">("flat");
  const [deliverables, setDeliverables] = useState<string[]>(["cad", "pdf", "cert"]);

  const toggleDeliverable = (item: string) => {
    if (deliverables.includes(item)) {
      setDeliverables(deliverables.filter((d) => d !== item));
    } else {
      setDeliverables([...deliverables, item]);
    }
  };

  // Dynamic cost calculation algorithm
  const calculateEstimate = () => {
    let normalizedAcres = areaSize;
    if (unit === "sqft") normalizedAcres = areaSize / 43560;
    if (unit === "gunthas") normalizedAcres = areaSize / 40;

    let baseRatePerAcre = 8500;
    let baseMinFee = 12000;
    let turnaroundDays = 2;

    switch (surveyType) {
      case "gps-survey":
        baseRatePerAcre = 7500;
        baseMinFee = 15000;
        turnaroundDays = 2;
        break;
      case "topographical-survey":
        baseRatePerAcre = 9500;
        baseMinFee = 14000;
        turnaroundDays = 3;
        break;
      case "land-survey":
        baseRatePerAcre = 6500;
        baseMinFee = 10000;
        turnaroundDays = 2;
        break;
      case "contour-survey":
        baseRatePerAcre = 10500;
        baseMinFee = 16000;
        turnaroundDays = 3;
        break;
      case "subdivision-survey":
        baseRatePerAcre = 12000;
        baseMinFee = 18000;
        turnaroundDays = 4;
        break;
      case "boundary-refixing":
        baseRatePerAcre = 7000;
        baseMinFee = 12000;
        turnaroundDays = 1;
        break;
      case "building-setting-out":
        baseRatePerAcre = 14000;
        baseMinFee = 18000;
        turnaroundDays = 1;
        break;
    }

    // Terrain Multiplier
    let terrainMult = 1.0;
    if (terrain === "moderate") terrainMult = 1.25;
    if (terrain === "steep") terrainMult = 1.6;

    // Deliverables add-on
    let addOn = 0;
    if (deliverables.includes("3d-bim")) addOn += 6000;
    if (deliverables.includes("point-cloud")) addOn += 8000;

    const rawCost = Math.max(baseMinFee, normalizedAcres * baseRatePerAcre * terrainMult) + addOn;
    const lowEst = Math.round(rawCost * 0.9 / 500) * 500;
    const highEst = Math.round(rawCost * 1.15 / 500) * 500;

    if (normalizedAcres > 10) turnaroundDays += Math.floor(normalizedAcres / 10);

    return {
      lowEst: lowEst.toLocaleString("en-IN"),
      highEst: highEst.toLocaleString("en-IN"),
      turnaroundDays,
    };
  };

  const estimate = calculateEstimate();

  return (
    <div className="w-full max-w-5xl mx-auto glass-card p-6 sm:p-10 border border-slate-200/90 shadow-2xl rounded-3xl bg-white relative overflow-hidden">
      
      {/* Background Decorator */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Left Configurator Column */}
        <div className="w-full lg:w-7/12 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
              <FiSliders className="text-sm" /> Instant Cost & Time Estimator
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Calculate Your Land Survey Cost
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Select your property parameters to generate a transparent ballpark estimate with turnaround milestones.
            </p>
          </div>

          {/* 1. Survey Type Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              1. Select Survey Discipline
            </label>
            <select
              value={surveyType}
              onChange={(e) => setSurveyType(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              <option value="topographical-survey">Topographical & Contour 3D Survey</option>
              <option value="gps-survey">GPS / DGPS Sub-Centimeter RTK Survey</option>
              <option value="land-survey">Boundary Verification & Title Deed Land Survey</option>
              <option value="contour-survey">Contour Elevation & Slope Topography</option>
              <option value="subdivision-survey">Land Plot Subdivision & Masterplan Layout</option>
              <option value="boundary-refixing">Boundary Refixing & Demarcation Pegging</option>
              <option value="building-setting-out">Building Setting Out</option>
            </select>
          </div>

          {/* 2. Property Area Size & Unit */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                2. Property Size
              </label>
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
                {(["acres", "sqft", "gunthas"] as const).map((u) => (
                  <button
                    key={u}
                    onClick={() => {
                      setUnit(u);
                      if (u === "sqft" && areaSize < 1000) setAreaSize(10000);
                      if (u === "acres" && areaSize > 100) setAreaSize(2);
                      if (u === "gunthas" && areaSize > 200) setAreaSize(20);
                    }}
                    className={`px-2.5 py-1 text-xs font-bold rounded-md capitalize transition-colors ${
                      unit === u ? "bg-blue-600 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {u}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <input
                type="range"
                min={unit === "acres" ? 0.5 : unit === "gunthas" ? 2 : 1000}
                max={unit === "acres" ? 50 : unit === "gunthas" ? 200 : 500000}
                step={unit === "acres" ? 0.5 : unit === "gunthas" ? 1 : 1000}
                value={areaSize}
                onChange={(e) => setAreaSize(Number(e.target.value))}
                className="flex-1 accent-blue-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <div className="w-28 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono text-sm font-bold text-center text-slate-900">
                {areaSize.toLocaleString()} {unit}
              </div>
            </div>
          </div>

          {/* 3. Terrain Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              3. Terrain & Ground Condition
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "flat", label: "Flat / Clear", desc: "Open Ground" },
                { id: "moderate", label: "Moderate", desc: "Slopes / Trees" },
                { id: "steep", label: "Steep / Jungle", desc: "Dense Canopy" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTerrain(t.id as "flat" | "moderate" | "steep")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    terrain === t.id
                      ? "border-blue-600 bg-blue-50/70 text-blue-950 shadow-sm"
                      : "border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700"
                  }`}
                >
                  <div className="text-xs font-bold">{t.label}</div>
                  <div className="text-[10px] text-slate-500">{t.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 4. Deliverables Package */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              4. Deliverables Included
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { id: "cad", label: "AutoCAD .DWG / .DXF" },
                { id: "pdf", label: "Signed PDF Survey Plan" },
                { id: "cert", label: "Licensed Surveyor Seal" },
                { id: "3d-bim", label: "3D Revit / TIN Surface (+)" },
                { id: "point-cloud", label: "3D Digital Elevation Model (+)" },
              ].map((d) => (
                <button
                  key={d.id}
                  onClick={() => toggleDeliverable(d.id)}
                  className={`flex items-center gap-2 p-2 rounded-lg border text-left transition-colors ${
                    deliverables.includes(d.id)
                      ? "border-blue-600 bg-blue-50/50 text-blue-900 font-semibold"
                      : "border-slate-200 text-slate-600"
                  }`}
                >
                  <FiCheckCircle className={`text-sm flex-shrink-0 ${deliverables.includes(d.id) ? "text-blue-600" : "text-slate-300"}`} />
                  <span>{d.label}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Output Calculation Box */}
        <div className="w-full lg:w-5/12 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl border border-slate-800">
          
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">
              Estimated Budget Bracket
            </div>
            
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                ₹{estimate.lowEst}
              </span>
              <span className="text-slate-400 text-sm">to</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-cyan-300">
                ₹{estimate.highEst}*
              </span>
            </div>

            <p className="text-[11px] text-slate-400 mb-6">
              *Approximate ballpark for standard projects. Final quote verified upon brief satellite & deed review.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-800 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <FiClock className="text-cyan-400" /> Mobilization Time
                </span>
                <span className="font-bold text-white">Within 24 Hours</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <FiFileText className="text-cyan-400" /> CAD Plan Turnaround
                </span>
                <span className="font-bold text-white">{estimate.turnaroundDays} Business Days</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <FiCompass className="text-cyan-400" /> Precision Tolerance
                </span>
                <span className="font-bold text-emerald-400">±2mm to ±5mm RTK</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <FiMapPin className="text-cyan-400" /> Legal Validity
                </span>
                <span className="font-bold text-white">Municipal & Court Stamped</span>
              </div>
            </div>
          </div>

          <div className="pt-8 space-y-3">
            <Link
              href={`/contact?service=${surveyType}&size=${areaSize}${unit}`}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold text-sm text-center shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <span>Lock Quote & Book Site Visit</span>
              <FiArrowRight className="text-base" />
            </Link>
            
            <p className="text-[10px] text-center text-slate-500">
              No obligation. Our senior surveyor will call you in 15 mins to confirm project scope.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
