const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

const users = require('../fixtures/userData');

test('Logout com sucesso', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.accessWebsite();

  await loginPage.login(
    users.standardUser.username,
    users.standardUser.password
  );

  await loginPage.logout();

  await expect(page).toHaveURL(
    'https://www.saucedemo.com/'
  );

});