import { MetadataRoute } from "next";
import { SERVICES_DATA, SERVICE_AREAS, BLOG_POSTS } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://odysseysurvey.com";
  const lastModified = new Date();

  // Core Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/areas`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // 7 Dedicated Service Pages
  const serviceRoutes: MetadataRoute.Sitemap = Object.values(SERVICES_DATA).map((srv) => ({
    url: `${baseUrl}/services/${srv.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // 6 Regional Service Area Pages
  const areaRoutes: MetadataRoute.Sitemap = SERVICE_AREAS.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // 10 SEO Blog Article Pages
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...blogRoutes];
}
