module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    screens: {
      sm: "100%",
      md: "100%",
      lg: "800px",
      xl: "900px",
    },
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "800px",
        xl: "900px",
      },
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "0rem",
        xl: "0rem",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
