const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

const users = require('../fixtures/userData');

test('Validar responsividade em mobile', async ({ page }) => {

  await page.setViewportSize({
    width: 375,
    height: 667
  });

  const loginPage = new LoginPage(page);

  await loginPage.accessWebsite();

  await loginPage.login(
    users.standardUser.username,
    users.standardUser.password
  );

  await expect(page.locator('.inventory_list'))
    .toBeVisible();

});