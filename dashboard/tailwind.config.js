/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        soap: "#CDCAE9",
        violetBlue: "#6f68d1",
        lavender: "#E6E7FB",
        richBlack: "#030811",
        lightGray: "#d0d2d5",
      },
    },
  },
  plugins: [],
};
