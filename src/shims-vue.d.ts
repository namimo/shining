declare module "*.vue" {
  import type { DefineComponent } from "vue"

  const component: DefineComponent<{}, {}, any>
  export default component
}

// shims-vue.d.ts
