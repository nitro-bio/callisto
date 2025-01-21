import { defineConfig } from "vite";
import anywidget from "@anywidget/vite";

export default defineConfig({
  build: {
    outDir: "bundle",
    lib: {
      entry: ["src/callisto_frontend.tsx"],
      formats: ["es"],
    },
  },
  plugins: [anywidget()],
  define: {
    "process.env": {},
  },
});
