import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mustafa Aslanov | AI Engineer",
  description:
    "Portfolio and Resume of Mustafa Aslanov — AI Engineer & Front-End Developer specialized in Next.js, TypeScript, and AI technologies.",
  icons: {
    icon: "/favicon.ico",              // əsas favicon
    shortcut: "/favicon.ico",
    apple: "/icon.png",                // iPhone/Safari üçün
  },
  manifest: "/site.webmanifest",       // (istəyə bağlı, varsa)
  metadataBase: new URL("https://portfolio-website-yourvercel.vercel.app"), // istəyə bağlı
  openGraph: {
    title: "Mustafa Aslanov | AI Engineer",
    description:
      "Explore my portfolio and resume — combining AI systems, web technologies, and scalable solutions.",
    url: "https://portfolio-website-yourvercel.vercel.app",
    siteName: "Mustafa Aslanov Portfolio",
    images: [
      {
        url: "/images/og-preview.png", // varsa, preview şəkli
        width: 1200,
        height: 630,
        alt: "Mustafa Aslanov Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolageGrotesque.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}