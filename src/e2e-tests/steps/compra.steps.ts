import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";

Given('que Jael está en la página principal de SauceDemo', async function (this: CustomWorld) {
  await this.openBrowser();
  await this.page.goto(this.baseUrl);
  await this.page.waitForSelector('#login-button'); 
});

When('inicia sesión', async function (this: CustomWorld) {
  await this.page.fill('#user-name', this.userStandard);
  await this.page.fill('#password', this.userPassword);
  await this.page.click('#login-button');
});

When('agrega un producto al carrito', async function (this: CustomWorld) {
  await this.page.click('button[name="add-to-cart-sauce-labs-backpack"]');
  await this.page.click('.shopping_cart_link');
});

When('completa el proceso de compra', async function (this: CustomWorld) {
  await this.page.click('#checkout');
  await this.page.fill('#first-name', this.firstName);
  await this.page.fill('#last-name', this.lastName);
  await this.page.fill('#postal-code', this.postalCode);
  await this.page.click('#continue');
  await this.page.click('#finish');
});

Then('debería visualizar el mensaje de confirmación de compra exitosa', async function (this: CustomWorld) {
  const mensaje = await this.page.textContent('.complete-header');
  expect(mensaje?.trim()).toBe('Thank you for your order!');
  await this.closeBrowser();
});
