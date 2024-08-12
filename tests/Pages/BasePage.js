import { Builder, By, until } from 'selenium-webdriver';

export default class BasePage {
    constructor(driver) {
        this.driver = driver;
    }
}


