import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Land Surveying Guides, Property Law & Technical Articles",
  description: "Comprehensive guides on boundary disputes, land survey costs, RTK GNSS technology, subdivision regulations, and building setting out in Kerala.",
  alternates: {
    canonical: "https://www.odysseysurvey.com/blog",
  },
  openGraph: {
    title: "Land Surveying Knowledge Hub | Odyssey Survey",
    description: "Expert articles on land surveying, boundary disputes, GPS technology, and Kerala property laws.",
    url: "https://www.odysseysurvey.com/blog",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}

