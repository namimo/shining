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
    },
  },
  plugins: [
    // ...
    require("windicss/plugin/forms"),
  ],
}
