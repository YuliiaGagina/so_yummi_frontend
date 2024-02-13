/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "green-20": "#8baa36",
      "gray-100": "#22252A",
      "gray-90": "#3E4462",
      "gray-99": "#22252a",
      green: "#ebf3d4",
      "green-90": "#3a4a0b",
      white: "#ffffff",
    },
    skew: {
      20: "-20deg",
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",

      md: "0.375rem",
      lg: "70px",
      full: "9999px",
      large: "12px",
    },

    screens: {
      xs: "320px",
      sm: "768px",
      md: "1060px",
    },
  },
  jit: true,
  additionalVariants: ["hover"],
  plugins: [],
};
