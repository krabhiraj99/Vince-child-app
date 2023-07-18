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

    addPlugin(path.resolve(__dirname, source + "/plugins/kendoui.js"));
    extendPages((pages) => {
      // Add /test page
      appRoutes.default.forEach((r) => {
        pages.push(r);
      });
    });
    console.log("options after>>", nuxt.options.plugins);
  },
});
