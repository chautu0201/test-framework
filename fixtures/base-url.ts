import { test as base, expect } from '@playwright/test';

const test = base.extend({
  page: async ({ browser }, use) => {
    const page = await browser.newPage();
    await page.goto('https://pw-practice-dev.playwrightvn.com');
    await use(page);
    await page.close();
  },
});

export { test, expect };
