import { test, expect } from '@playwright/test';
import IPhonePage from '../Pages/IPhonePage';


test('hotline_search', async ({page}) => {
  const iPhonePage = new IPhonePage(page);
  await iPhonePage.navigateIphone();
  const AbtProd = await iPhonePage.getAboutProdBtn();
  expect(true).toBe(true);
});

test('hotline footer', async ({ page }) => {
  const iPhonePage = new IPhonePage(page);
  await iPhonePage.navigateIphone();
  const Comare = iPhonePage.getCompareBtn();
  expect(true).toBe(true);
  });
  
  test('hotline checkbox', async ({ page }) => {
    const iPhonePage = new IPhonePage(page);
  await iPhonePage.navigateIphone();
  const All = await iPhonePage.getPersonalListBtn();
  await All.click();
  expect(true).toBe(true);
  }); 
