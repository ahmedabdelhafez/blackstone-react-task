import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    open: true,
  },
  define: {
    // here is the main update
    global: "globalThis",
  },
});
