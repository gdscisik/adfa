import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  transpileDependencies: true,
  resolve: {
    alias: {
      "@": `${path.resolve(__dirname, "./src")}`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/sass/_variables.scss" as variables; @use "@/assets/sass/_mixins.scss" as mixins;`,
      },
    },
  },
});

