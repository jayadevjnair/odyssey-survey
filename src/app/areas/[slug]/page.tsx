import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  FiMapPin, 
  FiPhone, 
  FiClock, 
  FiShield, 
  FiArrowRight, 
  FiCompass,
  FiChevronRight,
  FiUsers
} from "react-icons/fi";
import { SERVICE_AREAS, SERVICES_DATA } from "@/lib/data";
import { FAQAccordion } from "@/components/interactive/FAQAccordion";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICE_AREAS.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = SERVICE_AREAS.find((a) => a.slug === slug);
  if (!area) return { title: "Area Not Found" };

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    keywords: [
      `Land Survey in ${area.name}`,
      `Topographical Survey in ${area.name}`,
      `DGPS Survey in ${area.name}`,
      `Boundary Survey in ${area.name}`,
      `Land Surveyor near me ${area.name}`,
      ...area.subDistricts.map((d) => `Land Survey in ${d}`)
    ],
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: `https://odysseysurvey.com/areas/${area.slug}`,
      images: ["/equipment.png"],
    },
  };
}

export default async function AreaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const area = SERVICE_AREAS.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  const areaFaqs = [
    {
      q: `How quickly can Odyssey Survey mobilize to my site in ${area.name}?`,
      a: `With ${area.activeCrews} active field crews permanently stationed across our ${area.name} hub, we typically mobilize to your property within ${area.turnaroundTime} of work order confirmation.`
    },
    {
      q: `Are your survey reports compliant with local municipal authorities in ${area.name}?`,
      a: `Yes. ${area.localRegulations} All survey plans, boundary verification blueprints, and CAD files produced by our ${area.name} team are certified and signed by licensed surveyors.`
    },
    {
      q: `What documentation is required for a survey in ${area.name}?`,
      a: `Standard documentation includes a property title deed copy or 7/12 extract, village revenue sketch/gut map, and existing boundary demarcations. Our local dispatch team can also assist in reviewing statutory revenue records prior to site mobilization.`
    },
    {
      q: `Which sub-districts and localities in ${area.name} do you cover?`,
      a: `We cover the entire ${area.name} region including ${area.subDistricts.join(", ")} and surrounding development corridors with full equipment deployment.`
    }
  ];

  const areaFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": areaFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
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
        "name": "Service Areas",
        "item": "https://odysseysurvey.com/areas"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": area.name,
        "item": `https://odysseysurvey.com/areas/${area.slug}`
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />

      {/* Breadcrumb Navigation Bar */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <FiChevronRight className="text-slate-400" />
            <Link href="/areas" className="hover:text-emerald-600 transition-colors">Service Areas</Link>
            <FiChevronRight className="text-slate-400" />
            <span className="text-slate-900 font-bold">{area.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-white py-16 lg:py-24 border-b border-slate-200 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <FiMapPin className="text-sm text-emerald-600" /> Regional Field Hub &bull; {area.region}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {area.h1}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {area.overview} Trusted by architects, builders, and landowners with {area.turnaroundTime} on-site mobilization.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-xs">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
              <div className="text-slate-500 font-semibold flex items-center gap-1.5">
                <FiUsers className="text-emerald-600" /> Active Crews
              </div>
              <div className="text-base font-black text-slate-900">{area.activeCrews} Field Units</div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
              <div className="text-slate-500 font-semibold flex items-center gap-1.5">
                <FiClock className="text-emerald-600" /> Mobilization
              </div>
              <div className="text-base font-black text-slate-900">{area.turnaroundTime}</div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
              <div className="text-slate-500 font-semibold flex items-center gap-1.5">
                <FiCompass className="text-emerald-600" /> Accuracy
              </div>
              <div className="text-base font-black text-emerald-600">±2mm to ±5mm</div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
              <div className="text-slate-500 font-semibold flex items-center gap-1.5">
                <FiShield className="text-emerald-600" /> Sanctions
              </div>
              <div className="text-xs font-bold text-slate-900 truncate">Municipal Certified</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href={`/contact?area=${area.slug}`}
              className="px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-2"
            >
              <span>Book Site Survey in {area.name}</span>
              <FiArrowRight />
            </Link>
            <a
              href="tel:+919876543210"
              className="px-8 py-4 rounded-2xl bg-white hover:bg-emerald-50/50 text-slate-800 font-bold text-sm border-2 border-slate-200 transition-all flex items-center justify-center gap-2"
            >
              <FiPhone className="text-emerald-600" />
              <span>Call Local Surveyor</span>
            </a>
          </div>

        </div>
      </section>

      {/* Main Content Body */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16 space-y-16">
        
        {/* Local Overview & Regional Experience */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Digital Surveying in {area.name}
          </h2>
          <p className="text-slate-700 leading-relaxed text-base">
            {area.overview} Our local survey engineers possess deep familiarity with {area.name}&apos;s distinctive geodetic topography, municipal masterplans, and revenue department cadastre. {area.localRegulations}
          </p>
        </section>

        {/* Sub-Districts Grid */}
        <section className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white space-y-6 shadow-sm">
          <div className="space-y-2">
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Local Sub-Districts & Neighborhoods We Serve in {area.name}
            </h3>
            <p className="text-xs text-slate-500">Same-day inspection available across all listed localities:</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {area.subDistricts.map((sub, sIdx) => (
              <div key={sIdx} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-700">
                <FiMapPin className="text-emerald-600 flex-shrink-0" />
                <span>{sub}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Local Services Offered */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Land Survey Disciplines Available in {area.name}
            </h2>
            <p className="text-sm text-slate-500">All services executed with RTK DGPS & robotic total stations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(SERVICES_DATA).map((srv) => (
              <div key={srv.slug} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-slate-900">{srv.title}</h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 uppercase">
                      {srv.turnaroundTime}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{srv.shortDesc}</p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                  <span className="text-emerald-600 font-semibold">{srv.accuracy}</span>
                  <Link href={`/services/${srv.slug}`} className="text-emerald-600 font-bold hover:underline">
                    View Service Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Local Area FAQs with Schema */}
        <section>
          <FAQAccordion
            items={areaFaqs}
            title={`${area.name} Land Survey FAQs`}
            subtitle={`Common questions about surveying scope, mobilization speed, and municipal approvals in ${area.name}.`}
            showSearch={false}
          />
        </section>

        {/* Direct Contact Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white space-y-6 text-center border border-slate-800">
          <h2 className="text-2xl sm:text-3xl font-black">
            Need a Certified Land Surveyor in {area.name}?
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Contact our local dispatch hub for a technical consultation and rapid mobilization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href={`/contact?area=${area.slug}`}
              className="px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xl transition-colors"
            >
              Request {area.name} Assessment
            </Link>
            <a
              href="tel:+917994776610"
              className="px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              <FiPhone className="text-emerald-400" />
              <span>Call +91 79947 76610</span>
            </a>
          </div>
        </section>

      </div>

    </main>
  );
}
