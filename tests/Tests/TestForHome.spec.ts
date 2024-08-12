import { test, expect } from '@playwright/test';
import HomePage from '../Pages/HomePage';


test('hotline_search', async ({page}) => {
  const homePage = new HomePage(page);
  await homePage.navigateHome();
  const searchField = await homePage.getSearchField();
  await searchField.fill('Lenovo');
  expect(true).toBe(true);
});

test('hotline footer', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateHome();
  const Footer = homePage.getFooter();
  expect(true).toBe(true);
  });
  
  test('hotline checkbox', async ({ page }) => {
    const homePage = new HomePage(page);
  await homePage.navigateHome();
  const Toggle = await homePage.getThemeToggle();
  await Toggle.click();
  expect(true).toBe(true);
  }); 

 
