import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-white": "#FFFFFF",
        "brand-offwhite": "#F8F8F6",
        "brand-black": "#0A0A0A",
        "brand-darkgray": "#1A1A1A",
        "brand-midgray": "#2C2C2C",
        "brand-lightgray": "#E8E8E8",
        "brand-gold": "#D4A017",
        "brand-gold-light": "#F0C040",
        "brand-gold-dark": "#A07810",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
