import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Digital Land Surveying Services in Kerala | GPS, Topo & Boundary Surveys",
  description: "Comprehensive digital land surveying in Kerala: GPS/DGPS, topographical survey, boundary refixing, building setting out, contour & subdivision surveys with licensed certification.",
  alternates: {
    canonical: "https://www.odysseysurvey.com/services",
  },
  openGraph: {
    title: "Digital Land Surveying Services | Odyssey Survey",
    description: "Enterprise geodetic portfolio: DGPS RTK satellite positioning, robotic total stations, 3D topographical contour mapping, and building setting out.",
    url: "https://www.odysseysurvey.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}

