import { after } from 'node:test';
import { WebDriver } from 'selenium-webdriver';

let driver: WebDriver;
    after(async function() {
    if (driver) {
        await driver.quit();
    }
    });
export { driver };