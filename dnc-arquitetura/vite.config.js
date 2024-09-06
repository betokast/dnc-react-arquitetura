import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: { //Utilização do servidor proxy para contornar bloqueios de CORS nas requisições
      '/files': {
        target: 'https://react.dnc.group/files',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/files/,''),
      }
    }
  }
})
