import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1e283b",
        gold: "#ffd700",
        footer: "#000000",
      },
      fontFamily: {
        heading: ["Outfit", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        pill: "100px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-slow": "marquee 45s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
