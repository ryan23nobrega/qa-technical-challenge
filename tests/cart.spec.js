const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const users = require('../fixtures/userData');

let inventoryPage;

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  inventoryPage = new InventoryPage(page);
  await loginPage.accessWebsite();
  await loginPage.login(
    users.standardUser.username,
    users.standardUser.password
  );
});

test('Adicionar produto ao carrinho', async ({ page }) => {
  await inventoryPage.addBackpackToCart();
  await inventoryPage.accessCart();
  await expect(page.locator('.cart_item')).toBeVisible();
});

test('Remover produto do carrinho', async ({ page }) => {
  await inventoryPage.addBackpackToCart();
  await inventoryPage.accessCart();
  await inventoryPage.removeBackpack();
  await expect(page.locator('.cart_item')).toHaveCount(0);
});