/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    // backgroundImage: {
    //   'xp0': 'url("../src/assets/xp0.jpeg")',
    //   'xp1': "url('../src/assets/xp1.jpeg')",
    //   'xp2': "url('../src/assets/xp2.jpeg')",
    //   'xp3': "url('../src/assets/xp3.jpeg')",
    //   'xp4': "url('../src/assets/xp4.jpeg')",
    //   'xp5': "url('../src/assets/xp5.jpeg')",
    //   'xp6': "url('../src/assets/xp6.jpeg')",
    //   'xp7': "url('../src/assets/xp7.jpeg')",
    //   'xp8': "url('../src/assets/xp8.jpeg')",
    //   'xp9': "url('../src/assets/xp9.jpeg')",
    //   'xp10': "url('../src/assets/xp10.jpeg')",
    //   'xp11': "url('../src/assets/xp11.jpeg')",
    // },
    colors: {
      primary: "#00040f",
      secondary: "#00f6ff",
      dimWhite: "rgba(255, 255, 255, 0.7)",
      customRed: '#c4122d',
      dimBlue: "rgba(9, 151, 124, 0.1)",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
};
export const plugins = [];