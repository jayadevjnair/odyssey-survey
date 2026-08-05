"use client";

import Link from "next/link";
import { 
  FiBookOpen, 
  FiClock, 
  FiArrowRight
} from "react-icons/fi";
import { BLOG_POSTS } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "@/components/ui/ScrollReveal";

export default function BlogHubPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      
      {/* Header Banner */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-16 text-center space-y-4">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <FiBookOpen className="text-sm text-emerald-600" /> Geodetic Science & Property Guides
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mt-2">
            Land Surveying Knowledge Hub
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mt-2">
            Expert articles, preparation checklists, CAD tutorials, and regulatory compliance advice authored by licensed geodetic surveyors and property legal specialists.
          </p>
        </FadeIn>
      </div>

      {/* Featured Blog Article (Post 1) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-16">
        {BLOG_POSTS.slice(0, 1).map((post) => (
          <ScaleIn
            key={post.slug}
            duration={0.7}
            className="glass-card rounded-3xl p-8 sm:p-12 border-2 border-emerald-500/30 bg-gradient-to-br from-white via-emerald-50/20 to-white shadow-2xl flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between"
          >
            <div className="space-y-4 flex-1">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="px-3 py-1 rounded-full bg-emerald-600 text-white font-bold uppercase tracking-wider">
                  Featured Guide
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold">
                  {post.category}
                </span>
                <span className="text-slate-500 flex items-center gap-1">
                  <FiClock /> {post.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug">
                <Link href={`/blog/${post.slug}`} className="hover:text-emerald-600 transition-colors">
                  {post.title}
                </Link>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-3 pt-2 text-xs text-slate-500">
                <span className="font-bold text-slate-900">{post.author.name}</span>
                <span>&bull;</span>
                <span>{post.publishDate}</span>
              </div>
            </div>

            <div className="w-full lg:w-72 flex flex-col justify-end">
              <Link
                href={`/blog/${post.slug}`}
                className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm text-center shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span>Read Complete Guide</span>
                <FiArrowRight />
              </Link>
            </div>
          </ScaleIn>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(1).map((post) => (
            <StaggerItem key={post.slug} direction="up">
              <article
                className="glass-card rounded-3xl p-8 border border-slate-200 bg-white shadow-lg flex flex-col justify-between group hover:border-emerald-500/50 hover:shadow-2xl transition-all duration-300 h-full"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-bold">
                      {post.category}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <FiClock /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">{post.publishDate}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-emerald-600 font-bold hover:underline flex items-center gap-1 group-hover:gap-1.5 transition-all"
                  >
                    <span>Read Article</span>
                    <FiArrowRight />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

    </main>
  );
}
