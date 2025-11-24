// vite.config.js
import { defineConfig } from 'vite'
// ...

export default defineConfig({
  base: './', // <--- Yeh line add karo
  plugins: [react()],
  // ...
});