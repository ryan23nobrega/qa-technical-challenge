const { test, expect } = require('@playwright/test');

const AxeBuilder = require('@axe-core/playwright').default;

const LoginPage = require('../pages/LoginPage');

test('Validar acessibilidade da página de login', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.accessWebsite();

  const accessibilityScanResults = await new AxeBuilder({ page })
    .analyze();

  console.log(
    'Quantidade de violações encontradas:',
    accessibilityScanResults.violations.length
  );

  expect(accessibilityScanResults.violations.length)
    .toBeGreaterThan(0);

});