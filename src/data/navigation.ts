// 定义我们数据的结构（TypeScript）
export interface NavLink {
  title: string;
  url: string;
  description: string;
}

export interface NavCategory {
  title: string;
  links: NavLink[];
}

// 在这里管理你所有的导航链接
export const navigationData: NavCategory[] = [
  {
    title: "个人站点",
    links: [
      {
        title: "博客",
        url: "/posts/",
        description: "我的所有文章和想法。",
      },
      {
        title: "笔记",
        url: "/notes/",
        description: "记录生活中的点滴。",
      },
      {
        title: "开源项目",
        url: "https://github.com/jklbb",
        description: "查看我的开源项目。",
      },
    ],
  },
  {
    title: "服务平台",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/",
        description: "全球最大的代码托管平台。",
      },
      {
        title: "Cloudflare",
        url: "https://www.cloudflare.com/",
        description: "全球领先的 CDN 服务提供商。",
      },
      {
        title: "Vercel",
        url: "https://vercel.com/",
        description: "全球领先的云平台。",
      },
    ],
  },
  {
    title: "工具资源",
    links: [
      {
        title: "Google Gemini",
        url: "https://gemini.google.com/",
        description: "Google 的强大 AI 模型。",
      },
      {
        title: "Unsplash",
        url: "https://unsplash.com/",
        description: "免费的高质量图片。",
      },
    ],
  },
  // 在这里添加更多分类...
];
