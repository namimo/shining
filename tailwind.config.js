const colors = require("windicss/colors")
const { theme } = require("windicss/defaultConfig")

module.exports = {
  shortcuts: {
    "button-primary":
      "inline-flex items-center justify-center px-12 py-3 text-lg font-semibold tracking-wide rounded-full bg-gradient-to-br from-lightBlue-500 to-gray-700 lg:text-3xl focus:outline-none",
  },
  theme: {
    extend: {
      // ...
      colors,
      fontFamily: {
        sans: ["Righteous", ...theme.fontFamily.sans],
      },
      boxShadow: {
        custom: "0 10px 15px 0 rgb(0 0 0 / 40%)",
      },
    },
  },
  plugins: [
    // ...
    require("windicss/plugin/forms"),
  ],
}
