import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import StructuredData from "./structured-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.myqarryon.com"),

  title: {
    default: "Atlanta Luggage Concierge, Storage & Delivery | QarryOn",
    template: "%s | QarryOn",
  },

  description:
    "QarryOn provides same-day luggage pickup, secure hold and delivery across Atlanta. From ATL Airport to hotels, Airbnbs and more, we handle your bags so you can move freely.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "QarryOn",
    title: "Atlanta Luggage Concierge, Storage & Delivery | QarryOn",
    description:
      "QarryOn provides same-day luggage pickup, secure hold and delivery across Atlanta. From ATL Airport to hotels, Airbnbs and more, we handle your bags so you can move freely.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Atlanta Luggage Concierge, Storage & Delivery | QarryOn",
    description:
      "QarryOn provides same-day luggage pickup, secure hold and delivery across Atlanta. From ATL Airport to hotels, Airbnbs and more, we handle your bags so you can move freely.",
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
      <body className="min-h-full flex flex-col">
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-1QT8L9SL1E"
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-1QT8L9SL1E');
    `}
  </Script>

  <StructuredData />
  {children}
</body>
    </html>
  );
}
