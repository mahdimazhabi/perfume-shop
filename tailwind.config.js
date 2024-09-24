/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // اصلاح تعریف گرادینت
        "custom-gradient": "linear-gradient(90deg, #233D65 0%, #7592C1 100%)",
      },
      colors: {
        coustmwhite: "#FFFFFF",
        coustmBlue: "#A2C2F4",
        coustm: "#0E1D35",
        coustmBluetext: "#56719E",
        coustmtextblue: "#233D65",
        coustmbgcomponentsabout: "#496490",
        coustocolorborder: "#8FAAC1",
        coustmsilvelr: "#DFDFDF",
      },
    },
  },
  plugins: [],
};
