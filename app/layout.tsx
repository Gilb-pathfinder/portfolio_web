import type { Metadata } from "next";
import { display, body, mono, homeDisplay } from "@/lib/fonts";
import { site } from "@/lib/content";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gilbertmugisha.dev"),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description:
    "Gilbert Mugisha is a software developer building modern, full-stack digital products with JavaScript, React and Next.js — with a design background in UI/UX and graphic design.",
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description:
      "Software developer building modern digital products with JavaScript, React and Next.js.",
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description:
      "Software developer building modern digital products with JavaScript, React and Next.js.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} ${homeDisplay.variable}`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text-primary">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
