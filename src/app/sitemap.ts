import { MetadataRoute } from "next";
import { SERVICES_DATA, SERVICE_AREAS, BLOG_POSTS } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.odysseysurvey.com";
  // Use stable dates — avoids marking every page as "modified today" on each deploy
  const coreDate = new Date("2026-10-01");
  const serviceDate = new Date("2026-10-01");
  const areaDate = new Date("2026-10-01");
  const blogDate = new Date("2026-10-01");

  // Core Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: coreDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: coreDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: coreDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/areas`,
      lastModified: coreDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: coreDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: coreDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: coreDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // 7 Dedicated Service Pages
  const serviceRoutes: MetadataRoute.Sitemap = Object.values(SERVICES_DATA).map((srv) => ({
    url: `${baseUrl}/services/${srv.slug}`,
    lastModified: serviceDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Regional Service Area Pages
  const areaRoutes: MetadataRoute.Sitemap = SERVICE_AREAS.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: areaDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // SEO Blog Article Pages
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: blogDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...blogRoutes];
}
