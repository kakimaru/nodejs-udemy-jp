import { chromium } from "@playwright/test";

// @see セレクターのチェーンの利用方法(>>)
// https://playwright.dev/docs/selectors#chaining-selectors

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");

  // CSS セレクターで要素を取得
  await page.waitForTimeout(2000)

  const inputLocator = await page.locator('xpath=//*[@id="__next"]/div/div[1]/label/input');
  await inputLocator.type('美')

  const pager3Locator = await page.locator('.page-link.page-number >> nth=2');
  await pager3Locator.click()

  const cardLocator = page.locator('.cards.list-group-item')

  const cardCount = await cardLocator.count();
  console.log(cardCount);

  // await browser.close();

})();
