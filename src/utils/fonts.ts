import { Poppins, Inter } from "next/font/google"

const inter_font = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
})

const poppins_font = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "600"],
})

export const inter = inter_font.variable
export const poppins = poppins_font.variable
