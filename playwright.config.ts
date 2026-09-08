import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
 // timeout:60000,

  //grep:/@sanity/,
  //grepInvert:/@regression/,

  expect:{timeout:60000},
  /* Run tests in files in parallel */
  fullyParallel: false,  //true-will run parally
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  /* Retry on CI only */
 // retries: process.env.CI ? 2 : 0,
 //Retry locally
// retries:3,
  /* Opt out of parallel tests on CI. */
 workers: process.env.CI ? 1 : undefined,

 // workers:5,  //inc or dec no of workers
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
 reporter: 'html',

 //reporter:[['html',{open:'always','outputFolder':'html-report'}]],--HTML 
  //reporter:'list',--list
  //reporter:'line',--line
  //reporter:'dot',--Dot
  //reporter:[['junit',{outputFile:'results.xml'}]], --junit
  //reporter:[['json',{outputFile:'results.json'}]],--json
 // reporter:'allure-playwright',--allure report

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    screenshot:'only-on-failure',//capture the screenshot//manual entry
    video:'off', //record the video//manual entry
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace:'off',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      //fullyParallel: true,
    },
/*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },*/

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
