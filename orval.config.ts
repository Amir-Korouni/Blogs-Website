import { defineConfig } from "orval";

export default defineConfig({
  devlog: {
    input: {
      target: "./public/swagger/openapi.json",
      unsafeDisableValidation: true,
    },
    output: {
      target: "./src/shared/generated/endpoints.ts",
      schemas: "./src/shared/generated/models",
      mode: "tags-split",
      client: "react-query",
      httpClient: "axios",
      indexFiles: true,
    },
  },
});
