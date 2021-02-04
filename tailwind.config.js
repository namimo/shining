const colors = require("tailwindcss/colors")
const { theme } = require("tailwindcss/defaultConfig")

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
    require("@tailwindcss/forms"),
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
