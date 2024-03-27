import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "展厅",
    icon: "icon-park-solid:palace",
    link: "gallery/",
  },
  {
    text: "珍宝柜",
    icon: "game-icons:locked-chest",
    link: "cabinet/",
  },
  {
    text: "家园补给",
    icon: "bi:people-fill",
    link: "friends/",
  },
  {
    text: "SaltA's Utopia",
    icon: "mdi:leaf",
    link: "https://www.salta.top",
  },
]);
