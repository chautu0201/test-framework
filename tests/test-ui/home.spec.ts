import { test, expect } from '../../fixtures/base-url';
import { HomePage } from '../../pom/pom-ui/home-page'; 

test('Log and verify the page title', async ({ page }) => {
  const homePage = new HomePage(page); 

  const title = await homePage.getTitle(); 
  console.log('Page Title:', title); 

  expect(title).toBe('Playwright practice site – Dev environment'); 
});
