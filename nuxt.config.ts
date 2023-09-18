// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@vueuse/motion/nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: true,
          Inter: [400, 700],
          "Josefin+Sans": true,
          Lato: [100, 300],
          Raleway: {
            wght: [100, 400],
            ital: [100],
          },
          "Bowlby One SC": true,
          "Bowlby One": true,
          Jost: true,
          "Nothing You Could Do": true,
        },
      },
    ],
  ],
  components: [
    {
      path: "~/components",
      extensions: [".vue"],
    },
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "Beschrijving",
          content:
            "Dit is de webpagina voor Patricia's honden uitlaat & oppas service.",
        },
      ],
    },
  },
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // nuxt.config.js
});
