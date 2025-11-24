// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // <--- YEH LINE ZAROOR ADD KAREIN

export default defineConfig({
  base: './', // Black screen fix ke liye yeh sahi hai
  plugins: [react()], // Ab 'react' defined hai
  // Agar aapke paas koi aur configuration hai to yahan aayegi
});