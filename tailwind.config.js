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
        html: "#E34C26",
        css: "#264DE4",
        javascript: "#F7DF1E",
        react: "#61DBFB",
        bootstrap: "#563D7C",
        java: "#007396",
        tailwind: "#38BDF8",
        android: "#A4C639",
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
