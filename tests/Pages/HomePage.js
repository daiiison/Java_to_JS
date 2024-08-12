import BasePage from './BasePage.js';
import { test, expect } from '@playwright/test';

class HomePage extends BasePage{
    constructor(driver) {
        super(driver);
      }
    async navigateHome(){
        await this.driver.goto('https://hotline.ua/');
    }
    async getSearchField(){
        return await this.driver.locator("//input[@placeholder='Знайти товар, магазин, бренд']");
    }
    async getThemeToggle(){
        return await this.driver.locator("//span[@class='toggle__button toggle__button--left']");
    }
    async getFooter(){
        return await this.driver.locator("//footer[@class='footer default-layout__footer']\n");
    }
}
export default HomePage;