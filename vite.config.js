import { defineConfig } from 'vite'

export default defineConfig({
  root: './',
  server: {
    host: true,    // コンテナ外からアクセス可能に
    watch: {
      usePolling: true, // Windowsなどで確実に監視するため
      interval: 1000,
    },
    port: 8080
  }
})