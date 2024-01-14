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
      backgroundColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        third: "var(--bg-third)",
        forth: "var(--bg-forth)",
        darkPrimary: "var(--dark-bg-primary)",
        darkSecondary: "var(--dark-bg-secondary)",
        darkThird: "var(--dark-bg-third)",
      },
      textColor: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        darkPrimary: "var(--dark-color-primary)",
        darkSecondary: "var(--dark-color-secondary)",
        blue: "var(--blue-color)",
        green: "var(--green-color)",
        lightBlue: "var(--light-blue-color)",
      },
      borderColor: {
        default: "var(--border-color)",
      },
      boxShadow: {
        1: "var(--shadow-1)",
        2: "var(--shadow-2)",
        3: "var(--shadow-3)",
        inset: "var(--shadow-inset)",
      },
    },
  },
  plugins: [],
};
