import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import myUnplugin from 'my-unplugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), myUnplugin()],
})
