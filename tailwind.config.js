/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
    },
    screens: {
      mobile: { max: "1023px" },

      laptop: { min: "1024px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
