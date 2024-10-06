import { chromium } from "@playwright/test";

(async () => {
  // @see https://playwright.dev/docs/api/class-browsertype#browser-type-launch
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/");

  // css selector
  // const pageTitleLocator = await page.locator('.cards.list-group-item > a >> nth=2')
  // const pageTitleLocator = await page.locator('.cards.list-group-item:nth-child(3) > a')
  const pageTitleLocator = page.locator('.cards.list-group-item >> ..')
  const pageTitle = await pageTitleLocator.innerText('')

  // text selector
  // const textLocator = await page.locator('text=名刺管理アプリ')
  // const pageText = await textLocator.innerText()

  // xpath
  // const xpathLocator = await page.locator('xpath=//*[@id="__next"]/nav/div/a')
  // const xpathText = await xpathLocator.innerText()

  // const htmlStr = await page.content(); // get html info
  // console.log(htmlStr);

  console.log(pageTitle)
  await browser.close();
})();
