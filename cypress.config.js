/** @format */

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  viewportWidth: 1920,
  viewportHeight: 1080,
});
