/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        my: "url('/src/assets/my.png')",
        bg3: "url('/src/assets/bg3.png')",
        loginbg: "url('/src/assets/loginbg.png')",
      },
    },
    colors: {
      "green-20": "#8baa36",
      "gray-100": "#22252A",
      "gray-10": "#868c97",
      "gray-20": "#3E4462",
      "gray-90": "#3E4462",
      "gray-99": "#22252a",
      "slate-100": "#e5e5e5",
      green: "#ebf3d4",
      "green-90": "#3a4a0b",
      "green-100": "#0e3600",
      white: "#ffffff",
      "red-100": "#970101",
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
