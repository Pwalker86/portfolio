import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@Src": path.resolve(__dirname, "./src/*"),
      "@Components": path.resolve(__dirname, "./src/components/*"),
      "@Routes": path.resolve(__dirname, "./src/routes/*"),
    },
  },
});
