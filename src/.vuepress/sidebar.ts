import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "展厅",
      icon: "icon-park-solid:palace",
      prefix: "gallery/",
      collapsible: true,
      children: ["2307-LunaKindredCursor", "2403-chipichapa", "2403-shuzhongjuanmo"],
    },
    {
      text: "珍宝柜",
      icon: "game-icons:locked-chest",
      prefix: "cabinet/",
      collapsible: true,
      children: ["2402-2024CNYGoods", "2403-BirthdayGoods"],
    },
    {
      text: "家园补给",
      icon: "bi:people-fill",
      prefix: "friends/",
      collapsible: true,
      children: ["baiweixi", "jinxiangmantianliuxingmianhua", "lingyi", "SaltA", "susu"],
    },
    "intro",

    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // "slides",
  ],
});
