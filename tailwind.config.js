/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto",
    },
    extend: {
      colors: {
        mainColor: "#181E2A",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "922px",
        xl: "1200px",
        "2xl": "1400px",
      },
      keyframes: {
        moveRight: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        moveRight: "moveRight 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
