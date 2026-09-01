import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const serveAdPlugin = () => ({
  name: 'serve-ad',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      // If the request is exactly /ad or /ad/, serve the static index.html
      if (req.url.split('?')[0] === '/ad' || req.url.split('?')[0] === '/ad/') {
        req.url = '/ad/index.html';
      }
      next();
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    serveAdPlugin(),
  ],
})
