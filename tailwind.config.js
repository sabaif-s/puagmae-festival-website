/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        goldenrod: '#DAA520', // Define your custom golden color here
      },
      
    },
  },
  plugins: [],
};
