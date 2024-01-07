const { defineConfig } = require("cypress");

module.exports = defineConfig({
  userAgent: "chrome",
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    setupNodeEvents(on, config) {},
    chromeWebSecurity: false,
    supportFile: "cypress/support/commands.js",
  },
});
