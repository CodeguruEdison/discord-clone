import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import postcssPresetMantine from "postcss-preset-mantine";
import dotenv from "dotenv";
dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        postcssPresetMantine(),
        // Add other PostCSS plugins here if needed
      ],
    },
  },
});
