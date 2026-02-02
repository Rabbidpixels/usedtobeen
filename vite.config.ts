import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Keep vendor libraries in separate chunk
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          // UI libraries in separate chunk
          "ui-vendor": ["lucide-react"],
        },
      },
    },
    // Better reporting of actual output size
    reportCompressedSize: true,
    // Increase chunk size warning threshold (we're lean now)
    chunkSizeWarningLimit: 300,
  },
}));
