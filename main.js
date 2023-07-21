import path from "path";

import { defineNuxtModule, addPlugin, extendPages, addLayout } from "@nuxt/kit";

import * as appRoutes from "./routes.json"; // created by `npm run build-routes`
import * as packageJson from "./package.json";

// const isCiCd = process.env.BITBUCKET_BRANCH !== undefined;
export default defineNuxtModule({
  meta: packageJson,

  async setup(options, nuxt) {
    console.log("options before>>", nuxt.options.plugins);
    const source = "src";
    nuxt.options.head.link.push({
      rel: "stylesheet",
      href: "https://unpkg.com/@progress/kendo-theme-default@latest/dist/all.css",
    });
    nuxt.options.head.script.push({
      src: "https://unpkg.com/vue@2.7.14",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/@progress/kendo-licensing",
    },
    {
      src: "https://unpkg.com/@progress/kendo-drawing@latest/dist/cdn/js/kendo-drawing.js",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/@progress/kendo-svg-icons@1.1.0/dist/index.js",
    },
    {
      src: "https://unpkg.com/@progress/kendo-vue-dateinputs@3.12.0/dist/cdn/js/kendo-vue-dateinputs.js",
    },
    {
      src: "https://unpkg.com/@progress/kendo-vue-dropdowns@3.12.0/dist/cdn/js/kendo-vue-dropdowns.js",
    },
    {
      src: "https://unpkg.com/@progress/kendo-vue-indicators@3.12.0/dist/cdn/js/kendo-vue-indicators.js",
    },
    {
      src: "https://unpkg.com/@progress/kendo-vue-inputs@3.12.0/dist/cdn/js/kendo-vue-inputs.js",
    },
    {
      src: "https://unpkg.com/@progress/kendo-vue-popup@3.12.0/dist/cdn/js/kendo-vue-popup.js",
    },
    {
      src: "https://unpkg.com/@progress/kendo-vue-data-tools@3.12.0/dist/cdn/js/kendo-vue-data-tools.js",
    },
    {
      src: "https://unpkg.com/@progress/kendo-vue-grid@latest/dist/cdn/js/kendo-vue-grid.js",
    },

    );
  
   

    addPlugin(path.resolve(__dirname, source + "/plugins/kendoui.js")); // comment this while using kendo plugin from parent app
    extendPages((pages) => {
      // Add /test page
      appRoutes.default.forEach((r) => {
        pages.push(r);
      });
    });
    console.log("options after>>", nuxt.options.plugins);
    console.log("links after>>", nuxt.options.head.link);
    console.log("links after>>", nuxt.options.head.script);
  },
});
