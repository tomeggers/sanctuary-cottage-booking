import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import content from '@/data/content.json';
import StructuredData from './components/StructuredData';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sanctuarycottage.co.nz"),
  title: {
    default: "Sanctuary Cottage | Peaceful Holiday Cottage in Hope, Tasman — Near Nelson & Richmond NZ",
    template: "%s | Sanctuary Cottage",
  },
  description:
    "Dog-friendly holiday cottage on 5 acres in Hope, Tasman. Private hot tub, fenced paddock, pond views, king bed. 10-15 min from Nelson & Richmond. $180/night, no hidden fees. 4.95 stars, 436 reviews.",
  keywords: [
    "accommodation Hope Tasman",
    "holiday cottage Hope",
    "cottage Nelson NZ",
    "dog-friendly cottage Nelson",
    "pet-friendly accommodation Tasman",
    "holiday rental Richmond Nelson",
    "cottage near Wakefield",
    "accommodation Brightwater",
    "peaceful retreat Nelson Tasman",
    "private hot tub cottage Nelson",
    "couples getaway Nelson",
    "countryside retreat Tasman",
    "rural accommodation Hope",
    "hobby farm stay Nelson",
    "sanctuary cottage Hope",
    "fenced property dogs Nelson",
    "Great Taste Trail accommodation",
    "Abel Tasman accommodation base",
    "Nelson wineries stay",
    "Tasman holiday home",
    "self-contained cottage Nelson",
    "romantic getaway Nelson NZ",
    "places to stay near Nelson",
    "places to stay Hope Tasman",
    "airbnb alternative Nelson",
    "book direct holiday cottage Nelson",
    "no booking fees accommodation Nelson",
  ],
  alternates: {
    canonical: "https://sanctuarycottage.co.nz",
  },
  openGraph: {
    title: "Sanctuary Cottage — Peaceful Holiday Cottage in Hope, Near Nelson & Richmond",
    description:
      "A tranquil cottage retreat on a 5-acre hobby farm in Hope, Tasman. Pond views, private hot tub, dog-friendly with fenced paddock. $180/night, no hidden fees. Rated 4.95 stars from 436 reviews.",
    url: "https://sanctuarycottage.co.nz",
    siteName: "Sanctuary Cottage",
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/hosting/Hosting-18438033/original/9d834119-0081-4c25-92ee-787421de4190.jpeg",
        width: 1200,
        height: 800,
        alt: "Sanctuary Cottage — peaceful countryside cottage in Hope, Tasman, New Zealand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanctuary Cottage | Peaceful Holiday Cottage Near Nelson NZ",
    description:
      "Dog-friendly cottage on 5 acres in Hope, Tasman. Hot tub, pond views, fenced paddock. $180/night, no hidden fees.",
    images: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-18438033/original/9d834119-0081-4c25-92ee-787421de4190.jpeg",
    ],
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
  other: {
    "geo.region": "NZ-TAS",
    "geo.placename": "Hope, Tasman",
    "geo.position": "-41.4025;173.2290",
    "ICBM": "-41.4025, 173.2290",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
