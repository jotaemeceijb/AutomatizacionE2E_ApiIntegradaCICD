import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";

Given('que Jael ha iniciado sesión en SauceDemo', async function (this: CustomWorld) {
  await this.openBrowser();
  await this.page.goto(this.baseUrl);
  await this.page.fill('#user-name', this.userStandard);
  await this.page.fill('#password', this.userPassword);
  await this.page.click('#login-button');
  await expect(this.page).toHaveURL(`${this.baseUrl}/inventory.html`);
});

When('hace clic en el menú lateral', async function (this: CustomWorld) {
  await this.page.click('#react-burger-menu-btn');
});

When('selecciona la opción de cerrar sesión', async function (this: CustomWorld) {
  await this.page.click('#logout_sidebar_link');
});

Then('debería ser redirigido a la página de inicio de sesión nuevamente', async function (this: CustomWorld) {
  await expect(this.page).toHaveURL(this.baseUrl);
  await this.closeBrowser();
});
