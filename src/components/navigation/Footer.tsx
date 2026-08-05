import Link from "next/link";
import Image from "next/image";
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiClock, 
  FiCompass, 
  FiCheckCircle, 
  FiShield, 
  FiArrowRight
} from "react-icons/fi";
import { SERVICES_DATA, SERVICE_AREAS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-12 border-t border-slate-800 relative overflow-hidden">
      
      {/* Tech Grid Ambience */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Top Trust & Accreditation Bar */}
        <div className="pb-12 mb-16 border-b border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
              <FiShield className="text-lg" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Licensed Surveyors</div>
              <div className="text-[11px] text-slate-400">Government Registered</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
              <FiCheckCircle className="text-lg" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">ISO 9001:2015</div>
              <div className="text-[11px] text-slate-400">Calibrated Quality Standards</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
              <FiCompass className="text-lg" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">±1.5mm Precision</div>
              <div className="text-[11px] text-slate-400">DGPS & Robotic Systems</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
              <FiClock className="text-lg" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">24h Mobilization</div>
              <div className="text-[11px] text-slate-400">Active Field Crews</div>
            </div>
          </div>
        </div>

        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 xl:gap-12 mb-16">
          
          {/* Col 1: Brand Info & NAP */}
          <div className="lg:col-span-2 space-y-5">
            {/* Brand Logo */}
            <Link href="/" className="inline-block group">
              <div className="px-4 py-2.5 rounded-2xl bg-white inline-flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/odyssey-logo.png"
                  alt="Odyssey Survey - Digital Land Surveyors"
                  width={260}
                  height={64}
                  className="h-12 sm:h-14 md:h-16 w-auto max-w-[260px] object-contain"
                />
              </div>
            </Link>
            
            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              Precision beyond boundaries. Odyssey Survey combines geodetic satellite DGPS technology, robotic total stations, and licensed surveying expertise to deliver court-admissible and municipal-compliant land survey solutions.
            </p>

            {/* NAP (Name, Address, Phone) for Local SEO */}
            <div className="space-y-2.5 pt-1 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <FiMapPin className="text-emerald-400 text-sm flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Headquarters (Ponkunnam)</div>
                  <span className="text-slate-400">Near Private Bus Stand, NH 183, Ponkunnam, Kottayam, Kerala 686506</span>
                  <div className="mt-1 text-slate-400">Branch Office: Main Road, Pala, Kottayam, Kerala 686575</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <FiPhone className="text-emerald-400 text-sm flex-shrink-0" />
                <a href="tel:+917994776610" className="hover:text-white font-mono font-semibold">+91 79947 76610</a>
              </div>
              <div className="flex items-center gap-2.5">
                <FiMail className="text-emerald-400 text-sm flex-shrink-0" />
                <a href="mailto:odysseysurveyorspnkm@gmail.com" className="hover:text-white truncate">odysseysurveyorspnkm@gmail.com</a>
              </div>
              <div className="flex items-center gap-2.5">
                <FiClock className="text-emerald-400 text-sm flex-shrink-0" />
                <span>Mon – Sunday: 8:00 AM – 7:00 PM (24/7 Field Dispatch)</span>
              </div>
            </div>
          </div>

          {/* Col 2: 7 Dedicated Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Survey Services
            </h4>
            <ul className="space-y-2 text-xs">
              {Object.values(SERVICES_DATA).map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{service.shortTitle}</span>
                    <FiArrowRight className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
              <li className="pt-1.5">
                <Link href="/services" className="text-emerald-400 font-semibold hover:underline">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas for Local SEO */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" /> Service Areas
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICE_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link 
                    href={`/areas/${area.slug}`}
                    className="text-slate-400 hover:text-teal-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{area.name}</span>
                    <FiArrowRight className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
              <li className="pt-1.5">
                <Link href="/areas" className="text-teal-400 font-semibold hover:underline">
                  Browse All Locations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links & Resources */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Odyssey Survey
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-400 hover:text-white transition-colors">
                  Case Studies & Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">
                  Surveying Knowledge Hub
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Schedule Site Survey
                </Link>
              </li>
            </ul>

            {/* Fast Quote Trigger */}
            <div className="mt-5 p-4 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-xs font-semibold text-white mb-1">Need a site survey?</div>
              <p className="text-[11px] text-slate-400 mb-2.5">Speak directly with a senior geodetic surveyor today.</p>
              <Link 
                href="/contact"
                className="block text-center py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
              >
                Schedule Assessment
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Odyssey Surveyors Pvt. Ltd. All rights reserved. Precision Land Surveying & Geodetic Engineering.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">Surveyor Accreditation</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
