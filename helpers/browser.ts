// helpers/browser.ts
import { chromium, Browser, Page } from 'playwright';

export async function launchBrowser() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Apply global timeouts
  page.setDefaultTimeout(10000);
  page.setDefaultNavigationTimeout(15000);

  return { browser, page };
}
