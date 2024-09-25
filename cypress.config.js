const { defineConfig } = require("cypress");

module.exports = {

  e2e: {
    setupNodeEvents(on, config) {

  },
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
},
};

