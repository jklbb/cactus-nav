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
        title: "关于我",
        url: "/about/",
        description: "了解更多关于我的信息。",
      },
      {
        title: "GitHub",
        url: "https://github.com/your-username",
        description: "查看我的开源项目。",
      },
    ],
  },
  {
    title: "开发工具",
    links: [
      {
        title: "Astro",
        url: "https://astro.build/",
        description: "构建快速网站的 Web 框架。",
      },
      {
        title: "Tailwind CSS",
        url: "https://tailwindcss.com/",
        description: "一个功能优先的 CSS 框架。",
      },
      {
        title: "VS Code",
        url: "https://code.visualstudio.com/",
        description: "我日常使用的代码编辑器。",
      },
    ],
  },
  {
    title: "设计资源",
    links: [
      {
        title: "Figma",
        url: "https://figma.com/",
        description: "协作界面设计工具。",
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
