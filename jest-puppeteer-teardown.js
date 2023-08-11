const { teardown: teardownPuppeteer } = require('jest-environment-puppeteer');

module.exports = async function globalTeardown() {
  await teardownPuppeteer(global.__BROWSER__);
};
