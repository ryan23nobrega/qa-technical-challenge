const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

const InventoryPage = require('../pages/InventoryPage');

const users = require('../fixtures/userData');

test('Adicionar produto ao carrinho', async ({ page }) => {

  const loginPage = new LoginPage(page);

  const inventoryPage = new InventoryPage(page);

  await loginPage.accessWebsite();

  await loginPage.login(
    users.standardUser.username,
    users.standardUser.password
  );

  await inventoryPage.addBackpackToCart();

  await expect(
    inventoryPage.cartBadge
  ).toContainText('1');

});

test('Remover produto do carrinho', async ({ page }) => {

  const loginPage = new LoginPage(page);

  const inventoryPage = new InventoryPage(page);

  await loginPage.accessWebsite();

  await loginPage.login(
    users.standardUser.username,
    users.standardUser.password
  );

  await inventoryPage.addBackpackToCart();

  await inventoryPage.removeBackpack();

  await expect(
    inventoryPage.cartBadge
  ).toBeHidden();

});