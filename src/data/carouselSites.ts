// 定义轮播项的数据结构
export interface CarouselSite {
  title: string;       // 站点标题
  description: string; // 站点描述
  imageUrl: string;    // 图片 URL (可以是本地 /public 下的图片或外部链接)
  linkUrl: string;     // 点击轮播项跳转的链接
}

// 在这里管理你的轮播站点
export const carouselSitesData: CarouselSite[] = [
  {
    title: "Astro 官方网站",
    description: "构建快速、现代化的网站。",
    imageUrl: "https://astro.build/assets/press/full-logo-light.svg", // 示例：外部图片
    linkUrl: "https://astro.build/",
  },
  {
    title: "Astro Cactus",
    description: "一个简单的 Astro 主题。用它来创建你的博客或网站。",
    imageUrl: "/social-card.png", // 示例：本地图片 (相对于 public 目录)
    linkUrl: "https://github.com/chrismwilliams/astro-theme-cactus/",
  },
  {
    title: "LINUX DO",
    description: "真诚、友善、团结、专业，共建你我引以为荣之社区。",
    imageUrl: "/LINUXDO.png",
    linkUrl: "https://linux.do/",
  },
];