import { defineConfig } from "vitepress";

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: "ja-JP",
  title: "VitePress-BoilerPlate",
  description: "Vite & Vue powered static site generator.",
  base: "/vitepress-boilerplate/",

  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "Practice", link: "/practice/" },
    ],
    sidebar: {
      "/": [
        {
          text: "guide",
          items: [{ text: "Top", link: "/guide/" }],
        },
        {
          text: "practice",
          items: [{ text: "Top", link: "/practice/" }],
        },
      ],
    },
    logo: "/logo.png",
    search: {
      provider: "local",
    },
    lastUpdated: "true",
    footer: {
      message: "me",
      copyright: "Copyright",
    },
  },
});
