module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 300: "#dee2e6", 900: "#212529", "600_26": "#7c7c7c26", "600_4c": "#7c7c7c4c" },
        black: { "900_01": "#070918" },
        white: { A700: "#ffffff", A700_3f: "#ffffff3f" },
        blue_gray: { 700: "#495057" },
        light_blue_A700: "#007aff",
        black_900_33: "#00000033",
      },
      boxShadow: { xs: "0px 0px 8px 0px #000000" },
      fontFamily: { manrope: "Manrope" },
      backgroundImage: { gradient: "radial-gradient(90deg, #0e62bf,#0c4c93,#030712)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
