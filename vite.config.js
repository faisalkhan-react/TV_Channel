import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

module.exports = {
  theme: {
    extend: {
      boxShadow: {
        neu: '-20px -20px 60px #bebebe, 20px 20px 60px #ffffff',
      },
    },
  },
};


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
