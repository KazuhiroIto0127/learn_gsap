import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/learn_gsap/', // GitHubリポジトリ名に合わせて変更してください
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
