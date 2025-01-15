import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a84ff',  // Custom primary color for branding or highlights
        secondary: '#6a0dad', // Custom secondary color for accents
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'], // Custom sans-serif font
        mono: ['var(--font-geist-mono)', 'monospace'],  // Custom monospace font
      },
    },
  },
  plugins: [],
};

export default config;

