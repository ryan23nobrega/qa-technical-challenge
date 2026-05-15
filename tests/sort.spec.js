const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

const InventoryPage = require('../pages/InventoryPage');

const users = require('../fixtures/userData');

test('Ordenar produtos de Z para A', async ({ page }) => {

  const loginPage = new LoginPage(page);

  const inventoryPage = new InventoryPage(page);

  await loginPage.accessWebsite();

  await loginPage.login(
    users.standardUser.username,
    users.standardUser.password
  );

  await inventoryPage.sortProducts('za');

  const firstItem = await inventoryPage.inventoryItems
    .first()
    .textContent();

  await expect(firstItem).toContain('Test.allTheThings() T-Shirt');

});