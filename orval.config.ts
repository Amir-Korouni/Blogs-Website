import { defineConfig } from "orval";

export default defineConfig({
  devlog: {
    input: {
      target: "./public/swagger/openapi.json",
    },
    output: {
      target: "./src/app/api/generated/endpoints.ts",
      schemas: "./src/app/api/generated/models",
      mode: "tags-split",
      client: "react-query",
      httpClient: "axios",
      indexFiles: true,
    },
  },
});