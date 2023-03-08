// 路由配置
import { defineConfig } from "umi";

export default defineConfig({
  outputPath: 'dist',
  cssLoaderModules: {
    deadCode: true
  },
  routes: [
    {
      path: "/",
      component: "@/pages/index/index",
      routes: [
        {
          path: "/docs",
          component: "@/pages/docs/docs",
          access: '1',
        },
      ]
    },
    {
      path: "/403",
      component: "@/pages/components/403/403",
    },
    {
      path: "/*",
      component: "@/pages/components/404/404",
    },
  ],
  npmClient: 'pnpm',
});
