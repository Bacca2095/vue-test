import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as url from "url";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { "@": url.fileURLToPath(new url.URL("./src", import.meta.url)) },
  },
});
