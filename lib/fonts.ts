import { Space_Grotesk, Inter, JetBrains_Mono, Jost } from "next/font/google";

export const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

// Stand-in for "Izmir" (a paid, non-Google font by Ahmet Altun — not
// legally obtainable to bundle here). Jost is the closest free geometric
// sans available via next/font/google. Swap for real Izmir files via
// next/font/local if a license is provided.
export const homeDisplay = Jost({
  variable: "--font-home-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
