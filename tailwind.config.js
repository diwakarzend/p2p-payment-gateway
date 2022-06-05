module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#fff",
      black: "#302F2F",
      grey: "#848484",
      bodyBg: "#F9F9F9",
      red: "#E30514",
      blue: "#009FE3",
      lightgey:"#AAA",
    },
    extend: {
      transformOrigin: {
        0: "0%",
      },
      zIndex: {
        "-1": "-1",
      },
      gridTemplateColumns: {
        270: "1fr 270px",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    fontSize: {
      8: ["0.8rem", { lineHeight: "1rem" }],
      10: ["1rem", { lineHeight: "1.2rem" }],
      11: ["1.1rem", { lineHeight: "1.4rem" }],
      12: ["1.2rem", { lineHeight: "1.5rem" }],
      13: ["1.3rem", { lineHeight: "1.5rem" }],
      14: ["1.4rem", { lineHeight: "1.8rem" }],
      15: ["1.5rem", { lineHeight: "1.8rem" }],
      16: ["1.6rem", { lineHeight: "2rem" }],
      17: ["1.7rem", { lineHeight: "2rem" }],
      18: ["1.8rem", { lineHeight: "2.5rem" }],
      20: ["2rem", { lineHeight: "2.5rem" }],
      25: ["2.5rem", { lineHeight: "3.8rem" }],
      35: ["3.5rem", { lineHeight: "4.8rem" }],
      50: ["5rem", { lineHeight: "5.5rem" }],
    },
    boxShadow: {
      1: "0px 1px 1px #0000001C",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
  },
  variants: { borderColor: ["responsive", "hover", "focus", "focus-within"] },
  plugins: [],
};
