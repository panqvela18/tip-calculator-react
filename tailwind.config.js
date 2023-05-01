/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Space Mono",
    },
    extend: {
      colors: {
        bgColor: "hsl(185, 41%, 84%)",
        inputColor: "hsl(189, 41%, 97%)",
        btnColor: "#00474B",
        reserColor: "#26C2AE",
        labelColor: "#5E7A7D",
        errorColor: "#E17457",
        activeResetColor: "#9FE8DF",
      },
      width: {
        31: "31%",
      },
      borderRadius: {
        25: "25px",
        5: "5px",
        15: "15px",
      },
      height: {
        48: "48px",
      },
      spacing: {
        38: "38px",
        70: "70px",
        25: "25px",
        260: "260px",
        122: "122px",
      },
    },
  },
  plugins: [],
};
