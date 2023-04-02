/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  safelist: ["bg-[#F7AB0A]", "border-[#333333]"],
  plugins: [require("@tailwindcss/line-clamp"), require("tailwind-scrollbar")],
};
