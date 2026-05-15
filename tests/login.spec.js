const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

const users = require('../fixtures/userData');

test('Login com usuário válido', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.accessWebsite();

  await loginPage.login(
    users.standardUser.username,
    users.standardUser.password
  );

  await expect(page).toHaveURL(/inventory/);

});

test('Login com usuário bloqueado', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.accessWebsite();

  await loginPage.login(
    users.lockedUser.username,
    users.lockedUser.password
  );

  await expect(
    page.locator('[data-test="error"]')
  ).toContainText('Sorry, this user has been locked out.');

});

test('Login com senha inválida', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.accessWebsite();

  await loginPage.login(
    'standard_user',
    'senha_errada'
  );

  await expect(
    page.locator('[data-test="error"]')
  ).toBeVisible();

});