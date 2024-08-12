import BasePage from './BasePage.js';
import { test, expect } from '@playwright/test';

class ComputerPage extends BasePage{
    constructor(driver){
        super(driver);
    }
    async navigateComputer(){
        await this.driver.goto('https://hotline.ua/ua/computer/')
    }
    async getSidebar(){
        return await this.driver.locator("//aside[@class='col-xs-12 col-lg-3']");
    }
    async getLaptopsContainer(){
        return await this.driver.locator("//div[@id='noutbuki-pk']");
    }
    async getBreadcrumbs(){
        return await this.driver.locator("(//div[@class='breadcrumbs__container'])[1]");
    }

}
export default ComputerPage;