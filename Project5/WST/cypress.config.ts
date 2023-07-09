import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    "baseUrl": "https://automation-workstream.arbisoft.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
