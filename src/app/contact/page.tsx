import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Licensed Land Surveyors in Kerala",
  description: "Request a precision land survey assessment in Kerala. Call +91 79947 76610 or contact our engineering hubs in Ponkunnam and Pala for 24-hr mobilization.",
  alternates: {
    canonical: "https://www.odysseysurvey.com/contact",
  },
  openGraph: {
    title: "Contact Odyssey Survey | Land Surveyors in Kerala",
    description: "Connect directly with licensed land surveyors in Kerala. Get guaranteed accuracy, clear deliverables, and 24-hour on-site mobilization.",
    url: "https://www.odysseysurvey.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

