// pom/pom-ui.ts
import { Page } from '@playwright/test';

class HomePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getTitle() {
    return this.page.title(); 
  }
}

export { HomePage };
