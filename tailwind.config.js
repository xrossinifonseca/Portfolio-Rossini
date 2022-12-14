/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#19364F",
        secondary: "#FB923C",
        "secondary-white": "#E0F2FE",
        "secondary-blue": "#0A2032",
      },
      backgroundImage: {
        "hero-banner": "url('../assets/banner.png')",
        bannermobile: "url('../assets/bannermobile.png')",
      },
    },
  },
  plugins: [],
};
