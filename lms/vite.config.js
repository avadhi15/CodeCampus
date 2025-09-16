import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
      tailwindcss(),

  ],
})
//@import "tailwindcss"; 
//Add an @import to your CSS file that imports Tailwind CSS.