import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        textWhite: "textWhite 1.75s ease infinite",
        textBlack: "textBlack 1.75s ease infinite",
      },
      keyframes: {
        textWhite: {
          "0%, 100%": {
            color: "#EF4444",
          },
          "50%": {
            color: "#fff",
          },
        },
        textBlack: {
          "0%, 100%": {
            color: "#EF4444",
          },
          "50%": {
            color: "#000",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
