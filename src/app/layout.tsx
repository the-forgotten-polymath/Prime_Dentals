import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://primedentalharidwar.in"),
  title: {
    default: "Prime Dental & Root Canal Treatment Center | Haridwar",
    template: "%s | Prime Dental Haridwar"
  },
  description: "Haridwar's first dedicated Root Canal Treatment Center. We offer painless root canals, laser gum surgery (SOGA), digital anesthesia, clear aligners, and comprehensive dental care.",
  keywords: ["Dentist in Haridwar", "Root Canal Center Haridwar", "Laser Gum Surgery Haridwar", "Best Dentist Haridwar", "Painless Root Canal", "Prime Dental Haridwar", "SOGA laser dentistry"],
  authors: [{ name: "Prime Dental" }],
  creator: "Prime Dental",
  openGraph: {
    title: "Prime Dental & Root Canal Treatment Center | Haridwar",
    description: "Expert dental care, painless root canals, and advanced laser dentistry in Haridwar.",
    url: "https://primedentalharidwar.in",
    siteName: "Prime Dental Haridwar",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Dental & Root Canal Treatment Center | Haridwar",
    description: "Expert dental care, painless root canals, and advanced laser dentistry in Haridwar.",
  },
  alternates: {
    canonical: "/",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "LocalBusiness", "MedicalClinic"],
  "name": "Prime Dental & Root Canal Treatment Center",
  "image": "https://primedentalharidwar.in/images/hero-mob.png",
  "description": "Haridwar's first dedicated Root Canal Treatment Center offering advanced, precise and comfortable dental care including laser surgery, orthodontics, and digital anesthesia.",
  "url": "https://primedentalharidwar.in",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Haridwar",
    "addressRegion": "Uttarakhand",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "10:00",
      "closes": "14:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "17:00",
      "closes": "20:00"
    }
  ],
  "medicalSpecialty": ["Dentistry"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="page-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
