import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "展厅",
      icon: "guidance:gallery",
      prefix: "gallery/",
      children: "structure",
    },
    "intro",
    // "slides",
  ],
});
