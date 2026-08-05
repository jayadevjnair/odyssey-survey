import type { Metadata } from "next";
import Link from "next/link";
import { 
  FiMapPin, 
  FiUsers, 
  FiClock, 
  FiArrowRight, 
  FiShield
} from "react-icons/fi";
import { SERVICE_AREAS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Service Areas in Kerala | Licensed Land Surveyors in Kottayam, Pathanamthitta & Kollam",
  description: "Find licensed digital land surveyors in Kottayam, Pala, Ponkunnam, Pathanamthitta, Thiruvalla, and Kollam. RTK DGPS, total station, and 3D contour surveys with 24-hour on-site mobilization.",
};

export default function AreasHubPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      
      {/* Header Banner */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-16 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
          <FiMapPin className="text-sm text-emerald-600" /> Regional Coverage Across Central & South Kerala
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Licensed Land Surveyors in Kottayam, Pathanamthitta & Kollam
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Headquartered in Ponkunnam with branch operations in Pala, Odyssey Survey maintains active geodetic field crews and base stations providing rapid 24-hour mobilization across Kottayam, Pathanamthitta, and Kollam districts.
        </p>
      </div>

      {/* Areas Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area.slug}
              className="glass-card rounded-3xl p-8 border border-slate-200 bg-white shadow-xl flex flex-col justify-between group hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 uppercase tracking-wider">
                    {area.region}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 flex items-center gap-1">
                    <FiUsers /> {area.activeCrews} Active Crews
                  </span>
                </div>

                <h2 className="text-2xl font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {area.name}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {area.overview}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Key Sub-Districts Covered:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {area.subDistricts.map((dist, dIdx) => (
                      <span key={dIdx} className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                        {dist}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5 pt-2 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <FiShield className="text-emerald-600" />
                    <span>Compliance: Municipal Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiClock className="text-emerald-600" />
                    <span>Mobilization: {area.turnaroundTime}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href={`/areas/${area.slug}`}
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md shadow-emerald-500/20"
                >
                  <span>Explore {area.name} Survey Hub</span>
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}
