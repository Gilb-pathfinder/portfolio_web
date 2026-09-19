import { Poppins } from "next/font/google";

// Single project-wide typeface — used for both body copy and headings.
export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});
