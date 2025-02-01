import { defineConfig } from "vite";
import RubyPlugin from "vite-plugin-ruby";
import tsConfigPaths from "vite-tsconfig-paths";
import viteReact from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [
    RubyPlugin(),
    tsConfigPaths(),
    TanStackRouterVite({ autoCodeSplitting: true }),
  ],
});
