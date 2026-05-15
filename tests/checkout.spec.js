const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CheckoutPage = require('../pages/CheckoutPage');
const users = require('../fixtures/userData');

let inventoryPage;
let checkoutPage;

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  inventoryPage = new InventoryPage(page);
  checkoutPage = new CheckoutPage(page);
  await loginPage.accessWebsite();
  await loginPage.login(
    users.standardUser.username,
    users.standardUser.password
  );
});

test('Fluxo completo de compra', async ({ page }) => {
  await inventoryPage.addBackpackToCart();
  await inventoryPage.accessCart();
  await checkoutPage.startCheckout();
  await checkoutPage.fillCheckoutInformation(
    'Ryan',
    'Nobrega',
    '58000'
  );
  await checkoutPage.continueCheckout();
  await checkoutPage.finishCheckout();
  await expect(
    checkoutPage.successMessage
  ).toContainText('Thank you for your order!');
});

test('Não deve continuar checkout sem preencher campos obrigatórios', async ({ page }) => {
  await inventoryPage.addBackpackToCart();
  await inventoryPage.accessCart();
  await checkoutPage.startCheckout();
  await checkoutPage.continueCheckout();
  await expect(
    page.locator('[data-test="error"]')
  ).toBeVisible();
});