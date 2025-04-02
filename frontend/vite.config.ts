import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    host: "0.0.0.0", // Docker でもアクセス可能にする
    allowedHosts: ["ootashounomacbook-air.local"],
    port: 5173, // フロントエンドのポート
    proxy: {
      "/api": {
        target: "http://app:8081", // Gin の API サーバー（Docker のコンテナ名を指定）
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
