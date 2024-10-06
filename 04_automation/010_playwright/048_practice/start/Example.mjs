import { chromium } from "@playwright/test";

/**
 * 練習問題
 * [佐藤]で検索して、一番最後に出てくる人物の名前を取得してください。
 */
(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");

  const inputLocator = page.locator('xpath=//*[@id="__next"]/div/div[1]/label/input')
  const inputText = inputLocator.type('佐藤')

  const pagerLocator = page.locator('.page-link.page-number')
  if(await pagerLocator.count() > 1) {
    const lastPagerLocator = pagerLocator.locator('nth=-1')
    await lastPagerLocator.click()
  }

  const cardLocator = page.locator('.cards.list-group-item >> nth=-1')
  const lastCardName = await cardLocator.textContent()


  console.log(lastCardName)
  // await browser.close();

})();
