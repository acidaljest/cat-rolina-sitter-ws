import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--text-secondary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderColor: {
        primary: "var(--primary)",
        secondary: "var(--text-secondary)",
      },
      backgroundColor: {
        primary: "var(--primary)",
        secondary: "var(--text-secondary)",
        card: "var(--card-background)",
      },
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
      },
      ringColor: {
        primary: "var(--primary)",
        focus: "var(--focus-ring-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;
