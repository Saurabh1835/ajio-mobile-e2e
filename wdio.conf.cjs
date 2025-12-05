const allure = require('@wdio/allure-reporter').default;
require('dotenv').config();

exports.config = {
  runner: 'local',
  path: '/wd/hub',

  specs: [
    './features/**/*.feature'
  ],

  maxInstances: 1,

capabilities: [{
  platformName: 'Android',

  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'emulator-5554',   // always keep emulator-5554
  'appium:platformVersion': '13',

  'appium:app': '/Users/srikanth/Desktop/Mahi/Ajio.apk',

  'appium:appPackage': 'com.ril.ajio',
  'appium:appWaitActivity': '*',

  'appium:newCommandTimeout': 300,
  'appium:autoGrantPermissions': true,
  'appium:noReset': false
}],



  logLevel: 'info',
  bail: 0,
  waitforTimeout: 20000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  services: [
    ['appium', {
          command: 'appium',   // ✅ THIS LINE IS MANDATORY FOR GLOBAL APPIUM
      args: {
        address: '0.0.0.0',
        port: 4723,
        relaxedSecurity: true
      }
    }]
  ],

  framework: 'cucumber',

  reporters: [
    'spec',
    ['allure', {
      outputDir: 'reports/allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: false
    }]
  ],

  cucumberOpts: {
    require: ['./features/step-definitions/**/*.js'],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    snippets: true,
    source: true,
    strict: false,
    tagExpression: '',
    timeout: 600000,
    ignoreUndefinedDefinitions: false
  },

  //
  // HOOKS
  //
  before: async function () {
    const chai = require('chai');
    global.expect = chai.expect;
  },

  /**
   * Start screen recording before each scenario
   */
  beforeScenario: async function () {
    try {
      await driver.startRecordingScreen({
        videoType: 'mpeg4',
        timeLimit: '180',     // seconds
        bitRate: '5000000'
      });
    } catch (err) {
      console.warn('startRecordingScreen failed:', err.message || err);
    }
  },

  /**
   * Take screenshot on step failure and attach to Allure
   */
  afterStep: async function (step, scenario, result) {
    // For WDIO v8 + cucumber, result.passed is boolean
    if (result.passed === false) {
      try {
        const screenshot = await driver.takeScreenshot();
        allure.addAttachment(
          'Failure Screenshot',
          Buffer.from(screenshot, 'base64'),
          'image/png'
        );
      } catch (err) {
        console.warn('Failed to capture screenshot:', err.message || err);
      }
    }
  },

  /**
   * Stop screen recording after scenario and attach video to Allure
   */
  afterScenario: async function () {
    try {
      const videoBase64 = await driver.stopRecordingScreen();
      const buffer = Buffer.from(videoBase64, 'base64');
      allure.addAttachment('Screen Recording', buffer, 'video/mp4');
    } catch (err) {
      console.warn('stopRecordingScreen failed:', err.message || err);
    }
  }
};
