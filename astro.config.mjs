// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
   integrations: [tailwind()],
   site: "https://NahuelTG.github.io",
   base: "/NahuelXR",

   vite: {
      css: {
         preprocessorOptions: {
            scss: {
               additionalData: `@import "src/styles/variables.scss";`,
            },
         },
      },
   },

   build: {
      assets: "_astro",
   },
   image: {
      domains: ["github.io"],
   },
});
