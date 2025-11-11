import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";

Given('que Jael está en la página de inicio de sesión de SauceDemo', async function (this: CustomWorld) {
  await this.openBrowser();
  await this.page.goto(this.baseUrl);
  await this.page.waitForSelector('#login-button');
});

When('intenta iniciar sesión con credenciales inválidas', async function (this: CustomWorld) {
  const username = process.env.USER_LOCKED || 'locked_out_user';
  const password = process.env.PASSWORD_INVALID || 'clave_invalida';
  await this.page.fill('#user-name', username);
  await this.page.fill('#password', password);
  await this.page.click('#login-button');
});

Then('debería visualizar un mensaje de error indicando que las credenciales son incorrectas', async function (this: CustomWorld) {
  await this.page.waitForSelector('[data-test="error"]');
  const errorMensaje = await this.page.textContent('[data-test="error"]');
  expect(errorMensaje?.toLowerCase()).toContain('epic sadface');
  await this.closeBrowser();
});
