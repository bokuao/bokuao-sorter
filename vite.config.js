import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['/src/js/members/data.js', './src/js/members/html2canvas.min.js'],
  plugins: [react()],
  base: "/bokuao-sorter/"
})
