/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        mw230: { max: "230px" },
        mw290: { max: "290px" },
        mw500: { max: "500px" },
        mw768: { max: "768px" },
        mw920: { max: "920px" },
        mw1200: { max: "1200px" },
        mw1400: { max: "1400px" },
        mw1600: { max: "1600px" },
        mcp: { raw: "(pointer: coarse)" },
      },
      colors: {
        custom1: "#1e1e28",
        custom2: "#20202a",
        custom3: "#fafafc",
        custom4: "#8c8c8e",
        custom5: "#646466",
        custom6: "#2b2b35fa",
        mainyellow: "#ffc107",
      },
      fontSize: {
        "11px": "11px",
      },
      boxShadow: {
        shadow1: "0 3px 8px 0 rgba(15, 15, 20, 0.2)",
      },
      padding: {
        "15px": "15px",
      },
    },
  },
  plugins: [],
};
