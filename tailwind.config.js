/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // Deep blue for theme
        secondary: "#15803D", // Green accent
        accent: "#F59E0B", // Golden
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
