import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "SALT",
  description: "SALT的博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
