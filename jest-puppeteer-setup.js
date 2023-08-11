const { setup: setupPuppeteer } = require('jest-environment-puppeteer');

module.exports = async function globalSetup() {
  const browser = await setupPuppeteer();
  global.__BROWSER__ = browser;
};
