/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "green-20": "#8baa36",
      "gray-100": "#22252A",
      "gray-90": "#3E4462",
    },

    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  jit: true,
  additionalVariants: ["hover"],
  plugins: [],
};
