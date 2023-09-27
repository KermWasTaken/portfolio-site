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
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};
