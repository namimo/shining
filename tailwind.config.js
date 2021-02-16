const colors = require("windicss/colors")
const { theme } = require("windicss/defaultConfig")

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      // ...
      "./index.html",
      "./src/**/*.{vue,js,ts,css}",
    ],
    preserveHtmlElements: false,
  },
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
    // require("windicss/plugin/forms"),
  ],
  corePlugins: {
    // ...
    animation: false,
  },
  future: {
    //  ...
  },
  experimental: {
    // ...
  },
}
