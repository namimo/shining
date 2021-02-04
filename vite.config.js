import Vue from "@vitejs/plugin-vue"
import Legacy from "@vitejs/plugin-legacy"
import Pages from "vite-plugin-pages"
import ViteComponents from "vite-plugin-components"
import ViteIcons, { ViteIconsResolver } from "vite-plugin-icons"

/**
 * @type {import("vite").UserConfig}
 * */
const config = {
  plugins: [
    // ...
    Vue(),
    Legacy(),
    Pages(),
    ViteComponents({
      customComponentResolvers: [
        ViteIconsResolver({
          componentPrefix: "",
          // enabledCollections: ['carbon']
        }),
      ],
    }),
    ViteIcons({
      // scale: '1.2',
      defaultStyle: "",
    }),
  ],
}

export default config

// Considering only vue files in this pr: https://github.com/vuejs/vitepress/pull/137, net 221 loc were removed from 12 files.
// Less boilerplate, no need to register components, code doesn't start from 2nd level of indentation and you only write and see what you need.
