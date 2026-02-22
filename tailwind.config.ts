import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#070B1A",
        deepBlue: "#0E1B46",
        gold: "#E7BF60"
      }
    }
  },
  plugins: []
};

export default config;
