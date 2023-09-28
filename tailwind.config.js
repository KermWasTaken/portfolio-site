/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cardinal: "#AD343E",
        "outer-space": "#474747",
        moonstone: "#66999B",
        "coral-pink": "#FB9F89",
        white: "#FFFFFF",
        bubbl: "#2596BE",
      },
      transitionProperty: {
        height: "height",
      },
      borderRadius: {
        extraLarge: "12rem",
      },
    },
  },
  plugins: [],
};
