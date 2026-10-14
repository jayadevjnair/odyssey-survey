import type { Metadata } from "next";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  title: "Land Surveying Services in Kerala | Odyssey Survey",
  description: "Enterprise-grade digital land surveying, DGPS RTK satellite positioning, 3D topographical contour mapping, building setting out & boundary demarcation. Licensed surveyors with 24-hr turnaround.",
  alternates: {
    canonical: "https://www.odysseysurvey.com",
  },
};

export default function Page() {
  return <HomePage />;
}
