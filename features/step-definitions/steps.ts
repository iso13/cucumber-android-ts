/// <reference types="@wdio/globals/types" />
import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';

Given('I launch the Alkami app', async () => {
  const packageName = await driver.executeScript("mobile: getCurrentPackage", []);
  console.log('Launched package:', packageName);
});

When('I enter invalid credentials', async () => {
  const acceptBtn = await driver.$("~Accept");
  await acceptBtn.waitForDisplayed({ timeout: 10000 });
  await acceptBtn.click();

  const usernameInput = await driver.$('-android uiautomator:new UiSelector().resourceId("username")');
  await usernameInput.setValue('davidtran');

  const passwordInput = await driver.$('-android uiautomator:new UiSelector().resourceId("password")');
  await passwordInput.setValue('password');

  const loginBtn = await driver.$('-android uiautomator:new UiSelector().resourceId("btn_submitCredentials")');
  await loginBtn.click();
});

Then('I should see an error message saying {string}', async (expectedMessage: string) => {
  const errorEl = await driver.$(`-android uiautomator:new UiSelector().textContains("${expectedMessage}")`);
  await expect(errorEl).toBeDisplayed();
});