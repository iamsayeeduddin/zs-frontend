/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
          secondaryBrown: "#8A8475",
    border: '#e5e7eb', // light gray, you can change to any color you want
      },
    },
  },
  plugins: ["@tailwindcss/forms"],
};
