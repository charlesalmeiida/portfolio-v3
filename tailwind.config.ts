import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      animation: {
        scroll: "scroll 15s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      borderRadius: {
        md: "4px",
      },
      dropShadow: {
        shadowShape: "0px 9px 140px rgba(0, 0, 0, 0.10))",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        primaryGreen: "#21E6C1",
        blueLight: "#1F4287",
        blueDark: "#071E3D",
        gray03: "#212529",
        gray02: "#ADB5BD",
        gray01: "#F8F9FA",
      },
    },
  },
  plugins: [],
} satisfies Config
