import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  FiClock, 
  FiCalendar, 
  FiTag, 
  FiPhone, 
  FiChevronRight,
  FiBookOpen
} from "react-icons/fi";
import { BLOG_POSTS } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | Odyssey Survey Guide`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://odysseysurvey.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author.name],
      images: ["/equipment.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/equipment.png"],
    },
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Schema.org Article Structured Data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": ["https://odysseysurvey.com/equipment.png"],
    "datePublished": "2026-01-15T08:00:00+05:30",
    "dateModified": "2026-02-01T10:00:00+05:30",
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role,
      "worksFor": {
        "@type": "Organization",
        "name": "Odyssey Survey"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Odyssey Survey",
      "logo": {
        "@type": "ImageObject",
        "url": "https://odysseysurvey.com/equipment.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://odysseysurvey.com/blog/${post.slug}`,
    },
  };

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://odysseysurvey.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://odysseysurvey.com/blog",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://odysseysurvey.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />

      {/* Breadcrumbs Bar */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <FiChevronRight className="text-slate-400" />
            <Link href="/blog" className="hover:text-emerald-600 transition-colors">Blog</Link>
            <FiChevronRight className="text-slate-400" />
            <span className="text-slate-900 font-bold truncate max-w-xs sm:max-w-md">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12 lg:py-16">
        
        <div className="space-y-6 mb-12">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-slate-500 flex items-center gap-1">
              <FiClock /> {post.readTime}
            </span>
            <span className="text-slate-400">&bull;</span>
            <span className="text-slate-500 flex items-center gap-1">
              <FiCalendar /> {post.publishDate}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Author Badge */}
          <div className="flex items-center gap-3 pt-2">
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm shadow-md">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">{post.author.name}</div>
              <div className="text-xs text-slate-500">{post.author.role} &bull; Odyssey Technical Team</div>
            </div>
          </div>
        </div>

        {/* Key Takeaways Callout Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 mb-12 space-y-3 shadow-sm">
          <h2 className="text-sm font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-2">
            <FiBookOpen className="text-emerald-600 text-base" /> Key Engineering Takeaways
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
            {post.keyTakeaways.map((takeaway, tIdx) => (
              <li key={tIdx} className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">&bull;</span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="space-y-6 text-slate-800 leading-relaxed text-base sm:text-lg">
          {post.content.map((paragraph, idx) => {
            const isHeading = /^\d+\.\s|^(Why|How|What|Key|Step|Conclusion|Summary)/i.test(paragraph) && paragraph.length < 90;
            
            if (isHeading) {
              return (
                <h3 key={idx} className="text-2xl font-extrabold text-slate-900 tracking-tight pt-6">
                  {paragraph}
                </h3>
              );
            }

            return (
              <p key={idx} className="text-slate-700 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Tags Row */}
        <div className="pt-10 mt-12 border-t border-slate-200 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-500 mr-2 flex items-center gap-1">
            <FiTag /> Related Topics:
          </span>
          {post.tags.map((tag, tIdx) => (
            <span key={tIdx} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-lg font-medium">
              #{tag}
            </span>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-slate-900 text-white space-y-6 text-center border border-slate-800 shadow-2xl">
          <h3 className="text-2xl font-black">Need Professional Land Surveying Services?</h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Get precision DGPS RTK satellite positioning and certified AutoCAD deliverables for your project within 24–48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xl transition-colors"
            >
              Request Free Site Assessment
            </Link>
            <a
              href="tel:+919876543210"
              className="px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              <FiPhone className="text-emerald-400" />
              <span>Call +91 98765 43210</span>
            </a>
          </div>
        </div>

      </article>

    </main>
  );
}
