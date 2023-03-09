import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mail.google.com/');
  await page.goto('https://mail.google.com/');
  await page.goto('https://github.com');
  await page.goto('https://github.com');
  await page.goto('https://www.disneyplus.com/account');
  await page.goto('https://www.disneyplus.com/account');
  await page.goto('https://app.mabl.com');
  await page.goto('https://app.mabl.com');
});
