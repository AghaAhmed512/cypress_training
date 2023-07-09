import { defineConfig } from "cypress";

export default defineConfig({
  e2e: { 
    "baseUrl": "https://automation-workstream.arbisoft.com/",
    //"baseUrl":"https://demoblaze.com/",//for example1
    //"defaultCommandTimeout": 5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
