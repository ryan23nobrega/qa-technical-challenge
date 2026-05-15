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
  await expect(inventoryPage.cartBadge).toHaveText('1');
});

test('Remover produto do carrinho', async ({ page }) => {
  await inventoryPage.addBackpackToCart();
  await inventoryPage.removeBackpack();
  await expect(inventoryPage.cartBadge).toHaveCount(0);
});

test('Navegar para página do carrinho', async ({ page }) => {
  await inventoryPage.addBackpackToCart();
  await inventoryPage.accessCart();
  await expect(page).toHaveURL(/cart/);
});

test('Continuar navegando entre páginas', async ({ page }) => {
  await inventoryPage.addBackpackToCart();
  await inventoryPage.accessCart();
  await page.locator('[data-test="continue-shopping"]').click();
  await expect(page).toHaveURL(/inventory/);
});

test('Carrinho deve estar vazio ao acessar sem adicionar produto', async ({ page }) => {
  await inventoryPage.accessCart();
  await expect(page.locator('.cart_item')).toHaveCount(0);
});