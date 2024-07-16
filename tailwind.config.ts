import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "changing-colors": "changing-colors-keyframes 30s ease-in infinite",
      },
      keyframes: {
        "changing-colors-keyframes": {
          "0%": {
            "background-color": "#FEFFD8",
          },
          "50%": {
            "background-color": "#FFE8E8",
          },
          "100%": {
            "background-color": "#FEFFD8",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
