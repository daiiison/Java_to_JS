import { test, expect } from '@playwright/test';
import IPhonePage from '../Pages/IPhonePage';


test('hotline_search', async ({page}) => {
  const iPhonePage = new IPhonePage(page);
  await iPhonePage.navigateIphone();
  const abtProd = await iPhonePage.getAboutProdBtn();
});

test('hotline footer', async ({ page }) => {
  const iPhonePage = new IPhonePage(page);
  await iPhonePage.navigateIphone();
  const comare = iPhonePage.getCompareBtn();
});
  
test('hotline checkbox', async ({ page }) => {
  const iPhonePage = new IPhonePage(page);
  await iPhonePage.navigateIphone();
  const addToPersonalList = await iPhonePage.getPersonalListBtn();
  await addToPersonalList.click();
}); 
