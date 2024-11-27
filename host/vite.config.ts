import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        remoteApp: "http://localhost:5001/assets/remoteEntry.js",
        remoteWebpackApp: "http://localhost:8080/remoteEntry.js",
      },
      // shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
  },
});
