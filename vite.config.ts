import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { RouterProvider } from "react-router-dom";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
