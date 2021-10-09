const plugin = require("tailwindcss/plugin")
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        yellow: {
          50: "#ff10210e",
          100: "#fffcf0",
          200: "#fff2b8",
          300: "#fee780",
          400: "#fedd48",
          500: "#FED10E",
          600: "#d5ae01",
          700: "#9d8101",
          800: "#6b5700",
          900: "#332a00"
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".shadow-card": {
          "box-shadow": "0px 15px 30px rgba(0,0,0,0.1)"
        }
      }
      addUtilities(utilities)
    })
  ],
}
