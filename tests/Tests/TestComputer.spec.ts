import { test, expect } from '@playwright/test';
import ComputerPage from '../Pages/ComputerPage';

test('hotline Comps Breadcrumbs', async ({ page }) => {
  const computerPage = new ComputerPage(page);
  await computerPage.navigateComputer();
  const Breadcrumbs = computerPage.getBreadcrumbs();
});

test('hotline Comps Sidebar', async ({ page }) => {
  const computerPage = new ComputerPage(page);
  await computerPage.navigateComputer();
  const Sidebar = computerPage.getSidebar();
});

test('hotline Comps Laptop Cont', async ({ page }) => {
  const computerPage = new ComputerPage(page);
  await computerPage.navigateComputer();
  const Container = computerPage.getLaptopsContainer();
});