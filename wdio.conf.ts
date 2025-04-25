export const config = {
    // ✅ Required to use @wdio/globals like BeforeAll, AfterStep
    injectGlobals: true,
  
    specs: ['./features/**/*.feature'],
    maxInstances: 1,
  
    capabilities: [
      {
        platformName: 'Android',
        'appium:deviceName': 'Pixel_7_Pro_API_33',
        'appium:automationName': 'UiAutomator2',
        'appium:platformVersion': '13.0',
        'appium:appPackage': 'com.alkamitech.demo.android',
        'appium:appActivity': '.MainActivity',
        'appium:autoGrantPermissions': true,
      },
    ],
  
    services: ['appium'],
    framework: 'cucumber',
  
    cucumberOpts: {
      require: ['./features/step-definitions/**/*.ts', './features/support/**/*.ts'],
      timeout: 60000,
    },
  
    reporters: [
      'spec',
      [
        'allure',
        {
          outputDir: 'allure-results',
          disableWebdriverStepsReporting: true,
          disableWebdriverScreenshotsReporting: false,
        },
      ],
    ],
  };