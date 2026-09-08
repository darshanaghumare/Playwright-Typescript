import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1788620705607');
  await page.getByRole('combobox', { name: 'Search' }).click();

  await page.getByText('arsenal chelsea').click();
  await page.locator('iframe[name="a-sxkxftl5rbg6"]').contentFrame().locator('div').filter({ hasText: 'reCAPTCHA' }).nth(3).click();

});