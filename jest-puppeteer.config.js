let jest_puppeteer_conf = {
  launch: {
    timeout: 30000,
    dumpio: true,
    defaultViewport: { width: 1280, height: 720 },
  },
};

const isDebugMode =
  typeof v8debug === 'object' ||
  /--debug|--inspect/.test(process.execArgv.join(' '));

if (isDebugMode) {
  jest_puppeteer_conf.launch.headless = false;
  jest_puppeteer_conf.launch.slowMo = 250;
  jest_puppeteer_conf.launch.devtools = true;
  jest_puppeteer_conf.launch.args = ['--start-maximized'];
}

module.exports = jest_puppeteer_conf;
