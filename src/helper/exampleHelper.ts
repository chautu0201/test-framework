import { test, expect } from './fixture/base_url'; // Import custom test fixture

test('Verify page title', async ({ page }) => {
  const title = await page.title();
  expect(title).toBe('Expected Title'); // Replace with actual expected title
});

test('Check some element', async ({ page }) => {
  const elementText = await page.locator('text=Some Element').innerText();
  expect(elementText).toBe('Expected Text'); // Modify as needed
});
