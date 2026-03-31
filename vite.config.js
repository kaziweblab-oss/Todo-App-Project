import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    eslint({
      cache: false,
      failOnError: false,
      failOnWarning: false,
      emitWarning: true,
      emitError: true,
    }),

    babel({
      presets: [reactCompilerPreset()],
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
});
