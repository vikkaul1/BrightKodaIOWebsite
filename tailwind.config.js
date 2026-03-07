/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        koda: {
          navy: "#0B1F3A",
          teal: "#0D9488",
          tealLight: "#14B8A6",
          gold: "#F59E0B",
          cream: "#F8F6F1",
          gray: "#6B7280",
        }
      },
      fontFamily: {
        display: ["'DM Serif Display'", "Georgia", "serif"],
        body: ["'DM Sans'", "system-ui", "sans-serif"],
      }
    }
  },
  plugins: []
}
