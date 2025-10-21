/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        siteRed: "#FF0000",
        siteBlack: "#16171a",
        siteNavyBlue: "#001F54",
        siteGreyText: "#333333",
        siteGreyBg: "#F5F5F5",
        siteAccentMutedgold: "#D4AF37",
        siteCyan: "#4FC3F7",
        siteBeige: "#F5DEB3",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, #16171A 6%, rgba(22, 23, 26, 0.2) 99.93%)",
      },
      keyframes: {
        spinHorizontal: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Set Inter as the default sans-serif
      },
      animation: {
        "spin-horizontal": "spinHorizontal 0.7s linear",
      },
    },
  },
  plugins: [],
};
