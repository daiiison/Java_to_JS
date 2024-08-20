import { test, expect } from '@playwright/test';
import HomePage from '../Pages/HomePage';


test('hotline_search', async ({page}) => {
  const homePage = new HomePage(page);
  await homePage.navigateHome();
  const searchField = await homePage.getSearchField();
  await searchField.fill('Lenovo');
});

test('hotline footer', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateHome();
  const footer = homePage.getFooter();
});
  
test('hotline checkbox', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateHome();
  const toggle = await homePage.getThemeToggle();
  await toggle.click();
}); 

 
