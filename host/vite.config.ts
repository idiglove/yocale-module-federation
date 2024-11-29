import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      // @ts-ignore
      remotes: {
        remoteApp: {
          external: "http://localhost:5001/assets/remoteEntry.js",
          from: "vite",
          format: "esm",
        },
        remoteWebpackApp: {
          external: "http://localhost:8080/remoteEntry.js",
          format: "esm",
          from: "webpack",
        },
      },
      // shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
  },
});
