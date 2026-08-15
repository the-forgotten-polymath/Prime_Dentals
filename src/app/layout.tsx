import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import KiviBookingModal from "@/components/KiviBookingModal";

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

const kiviJsonLd = {
  "@context": "http://schema.org/",
  "@type": "MedicalOrganization",
  "image": "https://files.kivihealth.com/cache/profile_pic/20260726052605_27920.jpg",
  "@id": "https://kivihealth.com/clinic/-prime-dental-&-root-canal-treatment-",
  "name": "Prime Dental & Root Canal Treatment",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "G-3 & 5 super complex, behind Aastha Medical Store, Near City Hospital, Ranipur More , Haridwar",
    "addressLocality": "Ranipur More",
    "addressRegion": "Haridwar",
    "postalCode": "249401",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "29.933698125268",
    "longitude": "78.1341248605"
  },
  "telephone": "9997801777",
  "potentialAction": {
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://kivihealth.com/iam/.sahil.dhingra.gi2m0b0qphio/bookslot",
      "inLanguage": "en-US",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/IOSPlatform",
        "http://schema.org/AndroidPlatform"
      ]
    },
    "result": {
      "@type": "Reservation",
      "name": "Book an Appointment"
    }
  },
  "priceRange": "$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* KiviHealth Widget CSS */}
        <link rel="stylesheet" href="https://files.kivihealth.com/assets/css/widget.css" />
        
        {/* KiviHealth MedicalOrganization JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(kiviJsonLd) }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* KiviHealth Required jQuery & Bootstrap JS */}
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.kivihealth.com/twitter-bootstrap/3.3.6/js/bootstrap.min.js" strategy="lazyOnload" />

        <div className="page-wrapper">
          {children}
        </div>

        {/* Global KiviHealth Booking Modal */}
        <KiviBookingModal />
      </body>
    </html>
  );
}
