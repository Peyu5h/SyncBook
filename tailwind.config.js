/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "418px",
      xss: "496px",
      sm: "618px",
      md: "768px",
      lg: "902px",
      lgg: "1093px",
      xl: "1440px",
    },

    extend: {
      fontFamily: {
        seg: ["Segoe UI", "sans-serif"],
        hel: ["Helvetica", "sans-serif"],
        arial: ["Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
