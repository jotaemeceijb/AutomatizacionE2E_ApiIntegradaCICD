import { setWorldConstructor, World, IWorldOptions } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";
import * as dotenv from 'dotenv';

// Carga las variables del .env
dotenv.config();

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  // Variables de usuario
  baseUrl: string;
  userStandard: string;
  userPassword: string;
  firstName: string;
  lastName: string;
  postalCode: string;

  constructor(options: IWorldOptions) {
    super(options);

    // Inicializa las variables desde el .env
    this.baseUrl = process.env.BASE_URL || 'https://www.saucedemo.com';
    this.userStandard = process.env.USER_STANDARD || 'standard_user';
    this.userPassword = process.env.USER_PASSWORD || 'secret_sauce';
    this.firstName = process.env.FIRST_NAME || 'Jael';
    this.lastName = process.env.LAST_NAME || 'Diaz';
    this.postalCode = process.env.POSTAL_CODE || '10101';
  }

  async openBrowser(headless: boolean = false) {
    this.browser = await chromium.launch({ headless });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async closeBrowser() {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
