/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

import allureWriter from '@shelex/cypress-allure-plugin/writer';
import { defineConfig } from 'cypress';
import cucumberPreprocessor from 'cypress-cucumber-preprocessor';
import dotenvPlugin from 'cypress-dotenv';
import findConfig from 'find-config';
import SampleMongoDbTasks from './cypress/support/tasks/SampleMongoDbTasks';

function defineTasks(env, on) {
  SampleMongoDbTasks.define(on, env);
}

export default defineConfig({
  projectId: 'bri5dr',
  viewportWidth: 1200,
  viewportHeight: 800,
  defaultCommandTimeout: 5000,
  e2e: {
    setupNodeEvents(on, config) {
      const dotEnvConfig = {
        path: findConfig(`${config.env.ENV || 'stage'}.env`, {
          dir: 'cypress/config',
        }),
        debug: true,
      };
      config = dotenvPlugin(config, dotEnvConfig);
      on('file:preprocessor', cucumberPreprocessor.default());
      allureWriter(on, config);
      defineTasks(config.env, on);
      return config;
    },
    specPattern: 'cypress/e2e/features/**/*.feature',
    chromeWebSecurity: false,
    experimentalStudio: true,
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
  },
});
