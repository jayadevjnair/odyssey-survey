import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Survey Projects & Engineering Case Studies",
  description: "Explore completed land survey projects across Kerala — residential subdivisions, commercial building setting out, DGPS topographical surveys, and high-precision CAD deliverables.",
  alternates: {
    canonical: "https://www.odysseysurvey.com/projects",
  },
  openGraph: {
    title: "Survey Projects & Geodetic Case Studies | Odyssey Survey",
    description: "Explore real-world surveying projects and geodetic case studies across Kerala.",
    url: "https://www.odysseysurvey.com/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}

