import { notFound } from "next/navigation";
import type { Metadata } from "next";
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
  FiClock, 
  FiArrowRight, 
  FiPhone, 
  FiFileText,
  FiChevronRight
} from "react-icons/fi";
import { SERVICES_DATA } from "@/lib/data";
import { FAQAccordion } from "@/components/interactive/FAQAccordion";

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "gps-survey": FiCompass,
  "topographical-survey": FiActivity,
  "land-survey": FiMap,
  "contour-survey": FiLayers,
  "subdivision-survey": FiMaximize,
  "boundary-refixing": FiCrosshair,
  "building-setting-out": FiGrid,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [
      service.title,
      `${service.shortTitle} in Kottayam`,
      `${service.shortTitle} in Pala`,
      `${service.shortTitle} in Ponkunnam`,
      `${service.shortTitle} in Pathanamthitta`,
      `${service.shortTitle} in Kollam`,
      "Licensed Land Surveyor Kerala",
      "AutoCAD Land Survey"
    ],
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://odysseysurvey.com/services/${service.slug}`,
      images: ["/equipment.png"],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    notFound();
  }

  const Icon = serviceIcons[service.slug] || FiCompass;

  // Structured Data Schema for Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "serviceType": service.shortTitle,
    "description": service.shortDesc,
    "provider": {
      "@type": "ProfessionalService",
      "name": "Odyssey Survey",
      "url": "https://odysseysurvey.com",
      "telephone": "+91-98765-43210",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Odyssey Survey Engineering Hub, Near Private Bus Stand, NH 183, Ponkunnam",
        "addressLocality": "Ponkunnam, Kottayam",
        "addressRegion": "Kerala",
        "postalCode": "686506",
        "addressCountry": "IN"
      }
    },
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.title,
      "itemListElement": service.deliverables.map((del) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": del
        }
      }))
    }
  };

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://odysseysurvey.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://odysseysurvey.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `https://odysseysurvey.com/services/${service.slug}`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb Navigation Bar */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <FiChevronRight className="text-slate-400" />
            <Link href="/services" className="hover:text-emerald-600 transition-colors">Services</Link>
            <FiChevronRight className="text-slate-400" />
            <span className="text-slate-900 font-bold">{service.shortTitle}</span>
          </nav>
        </div>
      </div>

      {/* Service Hero Banner */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-white py-16 lg:py-24 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Icon className="text-sm text-emerald-600" /> {service.badge}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {service.h1}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
              {service.subtitle}
            </p>

            {/* Quick Specs Pill Row */}
            <div className="flex flex-wrap gap-4 pt-2 text-xs font-bold">
              <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2">
                <FiCompass className="text-emerald-600 text-sm" />
                <span>Accuracy: <span className="text-emerald-600">{service.accuracy}</span></span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2">
                <FiClock className="text-emerald-600 text-sm" />
                <span>Turnaround: <span className="text-slate-900">{service.turnaroundTime}</span></span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2">
                <FiShield className="text-emerald-600 text-sm" />
                <span>Municipal & Court Stamped</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href={`/contact?service=${service.slug}`}
                className="px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span>Request {service.shortTitle} Assessment</span>
                <FiArrowRight />
              </Link>
              <a
                href="tel:+917994776610"
                className="px-8 py-4 rounded-2xl bg-white hover:bg-emerald-50/50 text-slate-800 font-bold text-sm border-2 border-slate-200 transition-all flex items-center justify-center gap-2"
              >
                <FiPhone className="text-emerald-600" />
                <span>Call Senior Surveyor</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16 space-y-16">
        
        {/* 1. In-Depth Overview (500+ Words) */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            What is a {service.title} & Why is it Critical?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed text-base">
            {service.fullOverview.map((paragraph, pIdx) => (
              <p key={pIdx}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* 2. When It Is Needed */}
        <section className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            When is a {service.shortTitle} Required?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.whenNeeded.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <FiCheckCircle className="text-emerald-500 text-base flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Step-by-Step Engineering Methodology */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our 4-Stage Precision Methodology
            </h2>
            <p className="text-sm text-slate-600">
              How Odyssey Survey guarantees sub-centimeter geodetic precision on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.methodology.map((m) => (
              <div key={m.step} className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white space-y-3">
                <div className="text-2xl font-black text-emerald-600">{m.step}</div>
                <h3 className="text-lg font-bold text-slate-900">{m.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Strategic Benefits */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Key Advantages of Choosing Odyssey Survey
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.benefits.map((b, bIdx) => (
              <div key={bIdx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <FiCheckCircle className="text-emerald-600 flex-shrink-0" />
                  <span>{b.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Deliverables & Equipment Specs */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Deliverables Package */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-6 border border-slate-800">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <FiFileText className="text-emerald-400" /> Deliverables Package
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              {service.deliverables.map((del, dIdx) => (
                <li key={dIdx} className="flex items-start gap-2.5">
                  <FiCheckCircle className="text-emerald-400 text-sm flex-shrink-0 mt-0.5" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Precision Equipment Fleets */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FiCompass className="text-emerald-600" /> Precision Equipment Used
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              {service.equipment.map((eq, eIdx) => (
                <li key={eIdx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                  <span>{eq}</span>
                </li>
              ))}
            </ul>
          </div>

        </section>

        {/* 6. Service Specific FAQ Section with Schema */}
        <section>
          <FAQAccordion
            items={service.faqs}
            title={`${service.shortTitle} FAQs`}
            subtitle={`Expert answers regarding ${service.shortTitle.toLowerCase()} processes, accuracy tolerances, and workflows.`}
            showSearch={false}
          />
        </section>

        {/* 7. Location-Specific Conversion CTA Card */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-950 text-white space-y-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Book a Precision {service.shortTitle} in Your Area
          </h2>
          <p className="text-sm sm:text-base text-emerald-100 max-w-2xl mx-auto">
            Our licensed surveyor crews are ready to deploy within 24 hours. Get a comprehensive site evaluation and verified CAD deliverables.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href={`/contact?service=${service.slug}`}
              className="px-8 py-3.5 rounded-xl bg-white text-emerald-950 font-bold text-sm shadow-xl hover:bg-slate-100 transition-colors"
            >
              Get Free Site Assessment
            </Link>
            <a
              href="tel:+919876543210"
              className="px-8 py-3.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-950 text-white font-bold text-sm border border-emerald-400/40 transition-colors flex items-center justify-center gap-2"
            >
              <FiPhone className="text-emerald-400" />
              <span>Call +91 98765 43210</span>
            </a>
          </div>
        </section>

        {/* 8. Cross-Links to Related Services */}
        <section className="pt-8 border-t border-slate-200 space-y-6">
          <h3 className="text-xl font-bold text-slate-900">Related Survey Disciplines</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {service.relatedServices.map((relSlug) => {
              const rel = SERVICES_DATA[relSlug];
              if (!rel) return null;
              return (
                <Link
                  key={relSlug}
                  href={`/services/${relSlug}`}
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all group"
                >
                  <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {rel.shortTitle}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                    {rel.accuracy}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

      </div>

    </main>
  );
}
