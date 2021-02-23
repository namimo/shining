const colors = require("windicss/colors")
const { theme } = require("windicss/defaultConfig")

module.exports = {
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
