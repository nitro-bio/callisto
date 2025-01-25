import { defineConfig } from "vite";
import anywidget from "@anywidget/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  build: {
    outDir: "bundle",
    lib: {
      entry: ["src/callisto_frontend.tsx"],
      formats: ["es"],
    },
  },
  plugins: [anywidget(), tailwindcss()],
  define: {
    "process.env": {},
  },
});
