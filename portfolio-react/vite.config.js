import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // تأكدي أن هذا هو اسم المستودع (Repo) على غيت هوب
  server: {
    port: 3000
  }
})