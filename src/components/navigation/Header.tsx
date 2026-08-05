"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FiMenu,
  FiX,
  FiPhone,
  FiChevronDown,
  FiCompass,
  FiActivity,
  FiMap,
  FiLayers,
  FiMaximize,
  FiCrosshair,
  FiGrid,
  FiArrowRight,
  FiShield,
  FiMapPin
} from "react-icons/fi";
import { SERVICES_DATA, SERVICE_AREAS } from "@/lib/data";

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "gps-survey": FiCompass,
  "topographical-survey": FiActivity,
  "land-survey": FiMap,
  "contour-survey": FiLayers,
  "subdivision-survey": FiMaximize,
  "boundary-refixing": FiCrosshair,
  "building-setting-out": FiGrid,
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services", dropdownType: "services" },
    { label: "Projects", href: "/projects" },
    { label: "Service Areas", href: "/areas", dropdownType: "areas" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] border-b border-slate-200/80 py-2 sm:py-2.5"
          : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-2.5 sm:py-3.5"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">

          {/* Brand Logo */}
          <Link href="/" className="flex flex-col items-start justify-center group py-0.5">
            <Image
              src="/odyssey-logo.png"
              alt="Odyssey Survey Logo"
              width={280}
              height={54}
              priority
              className="h-[40px] sm:h-[46px] md:h-[50px] lg:h-[54px] w-auto max-w-[200px] sm:max-w-[240px] md:max-w-[280px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="flex items-center gap-1.5 pl-0.5 mt-0.5 leading-none">
              <span className="h-[1px] w-2 sm:w-3 bg-emerald-600 rounded-full" />
              <span className="text-[8px] sm:text-[9px] md:text-[9.5px] font-extrabold tracking-[0.16em] uppercase text-[#0B1A30] group-hover:text-emerald-700 transition-colors">
                Digital <span className="text-emerald-600 font-bold">Land Surveyors</span>
              </span>
              <span className="h-[1px] w-2 sm:w-3 bg-emerald-600 rounded-full" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              if (link.dropdownType === "services") {
                return (
                  <div
                    key={link.href}
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${isActive
                          ? "text-emerald-700 font-semibold bg-emerald-50/80"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                        }`}
                    >
                      <span>{link.label}</span>
                      <FiChevronDown className={`text-xs text-slate-400 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-emerald-600" : ""}`} />
                    </Link>

                    {/* Mega-menu Dropdown */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-[560px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3.5 grid grid-cols-2 gap-2 transition-all duration-200 origin-top ${servicesDropdownOpen ? "opacity-100 visible scale-100 translate-y-0" : "opacity-0 invisible scale-95 -translate-y-2 pointer-events-none"
                        }`}
                    >
                      <div className="col-span-2 px-3.5 py-2.5 bg-slate-50 border border-slate-100 rounded-xl mb-1 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FiShield className="text-emerald-600 text-sm" />
                          <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                            7 Geodetic Disciplines
                          </span>
                        </div>
                        <Link href="/services" className="text-xs font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                          View All Services <FiArrowRight className="text-[10px]" />
                        </Link>
                      </div>

                      {Object.values(SERVICES_DATA).map((service) => {
                        const Icon = serviceIcons[service.slug] || FiCompass;
                        return (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/60 transition-all group/item"
                          >
                            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors">
                              <Icon className="text-sm" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-xs font-semibold text-slate-800 group-hover/item:text-emerald-600 transition-colors truncate">
                                {service.shortTitle}
                              </div>
                              <div className="text-[11px] font-mono text-slate-500">
                                {service.accuracy}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              if (link.dropdownType === "areas") {
                return (
                  <div
                    key={link.href}
                    className="relative group"
                    onMouseEnter={() => setAreasDropdownOpen(true)}
                    onMouseLeave={() => setAreasDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${isActive
                          ? "text-emerald-700 font-semibold bg-emerald-50/80"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                        }`}
                    >
                      <span>{link.label}</span>
                      <FiChevronDown className={`text-xs text-slate-400 transition-transform duration-200 ${areasDropdownOpen ? "rotate-180 text-emerald-600" : ""}`} />
                    </Link>

                    {/* Areas Mega-menu Dropdown */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-[520px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3.5 grid grid-cols-2 gap-2 transition-all duration-200 origin-top ${areasDropdownOpen ? "opacity-100 visible scale-100 translate-y-0" : "opacity-0 invisible scale-95 -translate-y-2 pointer-events-none"
                        }`}
                    >
                      <div className="col-span-2 px-3.5 py-2 bg-emerald-50 border border-emerald-100 rounded-xl mb-1 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FiMap className="text-emerald-700 text-sm" />
                          <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                            Regional Service Hubs (24h Mobilization)
                          </span>
                        </div>
                        <Link href="/areas" className="text-xs font-semibold text-emerald-700 hover:underline">
                          All Areas →
                        </Link>
                      </div>

                      {SERVICE_AREAS.map((area) => (
                        <Link
                          key={area.slug}
                          href={`/areas/${area.slug}`}
                          className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/60 transition-all group/item"
                        >
                          <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 text-xs font-bold group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors">
                            <FiMapPin className="text-xs" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs font-semibold text-slate-800 group-hover/item:text-emerald-700 transition-colors truncate">
                              {area.name}
                            </div>
                            <div className="text-[10px] text-slate-500 truncate">
                              {area.turnaroundTime} Dispatch
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${isActive
                      ? "text-emerald-700 font-semibold bg-emerald-50/80"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Phone hotline on tablet/desktop */}
            <a
              href="tel:+917994776610"
              className="hidden md:flex items-center gap-2 text-xs font-medium text-slate-700 hover:text-slate-900 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200/80 hover:bg-slate-100 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <FiPhone className="text-emerald-600 text-xs" />
              <span className="font-mono font-semibold">+91 79947 76610</span>
            </a>

            {/* Request Survey Button (Visible on ALL screens including mobile) */}
            <Link
              href="/contact"
              className="px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-700 active:bg-emerald-800 text-white text-[11px] sm:text-xs font-semibold tracking-wide shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"
            >
              <span>Request Survey</span>
              <FiArrowRight className="text-xs text-emerald-400" />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-slate-200 shadow-2xl p-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-2" onClick={() => setMobileMenuOpen(false)}>
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${pathname === link.href
                      ? "text-emerald-700 bg-emerald-50"
                      : "text-slate-800 hover:bg-slate-50"
                    }`}
                >
                  {link.label}
                </Link>

                {link.dropdownType === "services" && (
                  <div className="pl-4 pr-2 pt-2 space-y-1 border-l-2 border-emerald-100 ml-3 mt-1">
                    {Object.values(SERVICES_DATA).map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:text-emerald-700"
                      >
                        {service.shortTitle}
                      </Link>
                    ))}
                  </div>
                )}

                {link.dropdownType === "areas" && (
                  <div className="pl-4 pr-2 pt-2 space-y-1 border-l-2 border-teal-100 ml-3 mt-1 grid grid-cols-2 gap-1">
                    {SERVICE_AREAS.map((area) => (
                      <Link
                        key={area.slug}
                        href={`/areas/${area.slug}`}
                        className="block px-2 py-1 text-xs font-medium text-slate-600 hover:text-teal-700 truncate"
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 border-t border-slate-100 space-y-2.5">
              <a
                href="tel:+917994776610"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-100 text-slate-800 font-semibold text-xs font-mono"
              >
                <FiPhone className="text-emerald-600" />
                <span>Call Hotline: +91 79947 76610</span>
              </a>
              <Link
                href="/contact"
                className="block text-center w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm"
              >
                Request Free Site Assessment
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
