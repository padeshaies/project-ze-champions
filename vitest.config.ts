// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/libs/**/*.test.ts", "src/libs/**/*.test.tsx"],
    environment: "node",
  },
});