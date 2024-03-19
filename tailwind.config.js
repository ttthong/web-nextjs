/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: "#d9d9d9",
        silver: {
          100: "#cac9c9",
          200: "#bfbfbf",
        },
        black: "#000",
        darkgray: {
          100: "#b0afaf",
          200: "#9e9d9d",
        },
        gray: "rgba(23, 23, 23, 0.5)",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
    },
    fontSize: {
      "6xl": "25px",
      xl: "20px",
      mini: "15px",
      base: "16px",
      "11xl": "30px",
      lg: "18px",
      "5xl": "24px",
      "31xl": "50px",
      "21xl": "40px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
