import { defineConfig } from "orval";

export default defineConfig({
  devlog: {
    input: {
      target: "./swagger/openapi.json",
    },
    output: {
      target: "./src/lib/api/generated/api.ts",
      schemas: "./src/lib/api/generated/models",
      client: "react-query",
      httpClient: "axios",
    }
  },
});