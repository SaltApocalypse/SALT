import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "SALT",
  description: "SALT的博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

});
