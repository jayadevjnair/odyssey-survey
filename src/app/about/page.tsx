import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Licensed Land Surveyors & Geodetic Engineers in Kerala",
  description: "Learn about Odyssey Survey — certified geodetic engineers and licensed land surveyors with 22+ years of expertise in DGPS, RTK GNSS, digital leveling, and boundary surveys across Kerala.",
  alternates: {
    canonical: "https://www.odysseysurvey.com/about",
  },
  openGraph: {
    title: "About Odyssey Survey | Licensed Land Surveyors in Kerala",
    description: "Setting the benchmark in precision land surveying with 22+ years of geodetic engineering leadership and advanced RTK GNSS equipment.",
    url: "https://www.odysseysurvey.com/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}

