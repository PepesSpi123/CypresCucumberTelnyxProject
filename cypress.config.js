const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config;
}

module.exports = defineConfig({

  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
    charts : true
  },
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 65000,
  //video: false,
  retries	: { "runMode": 2, "openMode": 2 },
  e2e: {
    baseUrl: 'https://telnyx.com/',
    specPattern: "**/features/*.feature",
    supportFile: false,
    setupNodeEvents,
  },
});
