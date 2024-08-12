import BasePage from './BasePage.js';
import { test, expect } from '@playwright/test';

class IPhonePage extends BasePage{
    constructor(driver){
        super(driver);
    }
    async navigateIphone(){
        await this.driver.goto("https://hotline.ua/ua/mobile-mobilnye-telefony-i-smartfony/apple-iphone-15-pro-max-256gb-black-titanium-mu773/");
    }
    async getCompareBtn(){
        return await this.driver.locator("//button[contains(text(),'Порівняти')]");
    }
    async getAboutProdBtn(){
        return await this.driver.locator("//b[contains(text(),'Про товар')]");
    }
    async getPersonalListBtn(){
        return await this.driver.locator("//div[@title='Додати товар в особисті списки']\n");
    }    
}
export default IPhonePage;