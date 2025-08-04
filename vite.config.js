import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/ 
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/My_portfolio/',
})

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//    // 🔁 यहाँ अपनी GitHub repo का नाम दो
// })