const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output-[hash].xml',
    toConsole: true,
  },
  // reporter: 'cypress-mochawesome-reporter',  // utiliser Mochawesome
  // reporterOptions: {
  //   reportDir: 'cypress/reports',            // dossier de sortie
  //   charts: true,                            // afficher graphiques
  //   reportPageTitle: 'Rapport QA SauceDemo', // titre HTML
  //   embeddedScreenshots: true,               // inclure captures d’écran
  //   inlineAssets: true,                       // HTML autonome
  //   overwrite: true,                         // écraser anciens rapports
  //   html: true,                              // générer HTML
  //   json: false                               // ne pas générer JSON
  // },

  e2e: {
    video: true,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',

    setupNodeEvents(on, config) {
      // require('cypress-mochawesome-reporter/plugin')(on);
      // return config;
      require('cypress-mochawesome-reporter/plugin')(on);
      const { plugin: cypressGrepPlugin } = require('@cypress/grep/plugin')
      cypressGrepPlugin(config)
      return config

    }
  }
});
