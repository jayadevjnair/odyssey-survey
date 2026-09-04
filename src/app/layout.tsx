import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { FloatingQuickBar } from "@/components/navigation/FloatingQuickBar";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { GoogleAnalytics } from "@/components/seo/GoogleAnalytics";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgressBar } from "@/components/ui/ScrollReveal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#059669",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://odysseysurvey.com"),
  title: {
    default: "Odyssey Survey | Precision Digital Land Surveying & GPS Services",
    template: "%s | Odyssey Survey",
  },
  description: "Enterprise-grade digital land surveying, DGPS RTK satellite positioning, 3D topographical contour mapping, building setting out & boundary demarcation. Licensed surveyors with 24-hr turnaround.",
  keywords: [
    "Land Survey",
    "Topographical Survey",
    "DGPS Survey",
    "Contour Survey",
    "Building Setting Out",
    "Boundary Refixing",
    "Land Subdivision Survey",
    "Licensed Land Surveyor",
    "High-Precision DGPS Survey",
    "Land Survey in Kottayam",
    "Land Survey in Pala",
    "Land Survey in Ponkunnam",
    "Land Survey in Erumeli",
    "Land Survey in Ranni",
    "Land Survey in Mundakayam",
    "Land Survey in Pathanamthitta",
    "Land Survey in Kollam",
    "Land Survey in Thiruvalla",
    "Land Survey in Kerala"
  ],
  authors: [{ name: "Odyssey Surveyors Pvt. Ltd." }],
  creator: "Odyssey Survey",
  publisher: "Odyssey Survey",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://odysseysurvey.com",
    siteName: "Odyssey Survey",
    title: "Odyssey Survey | Precision Digital Land Surveying",
    description: "Centimeter-precision land surveying, DGPS RTK, 3D topographic contour mapping & legal boundary verification.",
    images: [
      {
        url: "/equipment.png",
        width: 1200,
        height: 630,
        alt: "Odyssey Survey - Precision Digital Land Surveying",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Odyssey Survey | Precision Digital Land Surveying",
    description: "Centimeter-precision land surveying, DGPS RTK, 3D topographic contour mapping & legal boundary verification.",
    images: ["/equipment.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google-site-verification-odyssey-survey",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="canonical" href="https://odysseysurvey.com" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased flex flex-col selection:bg-emerald-600 selection:text-white">
        <GoogleAnalytics />
        <ScrollProgressBar />
        <LocalBusinessSchema />
        <Header />
        <SmoothScroll>
          <div className="flex-1 pt-20">
            {children}
          </div>
          <Footer />
        </SmoothScroll>
        <FloatingQuickBar />
      </body>
    </html>
  );
}
