import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import assert from 'assert';

let browser: Browser;
let page: Page;

Given('I am on the login page', async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
});

When('I enter {string} and {string}', async function (username: string, password: string) {
  await page.fill('[data-test="username"]', username);
  await page.fill('[data-test="password"]', password);
});

When('I click the login button', async function () {
  await page.click('[data-test="login-button"]');
});

Then('I should see the homepage', async function () {
  await page.waitForSelector('.inventory_list'); // Visible after successful login
  const isVisible = await page.isVisible('.inventory_list');
  assert.strictEqual(isVisible, true);
  await browser.close();
});

Then('I should see an error message', async function () {
  const errorMessage = await page.textContent('.error-message-container');
  assert.strictEqual(errorMessage?.includes('Epic sadface: Username and password do not match any user in this service'), true);
  await browser.close();
});

