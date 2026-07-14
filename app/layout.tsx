import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://divyadharshini.dev"),
  title: "Divyadharshini M — Full Stack Developer",
  description:
    "Full Stack Developer specializing in React.js, Next.js, TypeScript and PHP Laravel — building fast, interactive, scalable web applications.",
  keywords: [
    "Divyadharshini M",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "Frontend Developer",
  ],
  openGraph: {
    title: "Divyadharshini M — Full Stack Developer",
    description:
      "Full Stack Developer specializing in React.js, Next.js, TypeScript and PHP Laravel.",
    type: "website",
    url: "https://divyadharshini.dev",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${display.variable} ${body.variable} ${mono.variable} noise antialiased`}>
        <ScrollProgress />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
