import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      failOnError: false, // Prevent errors from failing the build
      emitWarning: true, // Emit warnings instead of errors
      emitError: false, // Suppress errors in development mode
    }),
  ],
});
