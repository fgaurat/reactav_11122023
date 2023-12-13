import puppeteer from "puppeteer";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

describe("Test E2E", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      args: ["--window-size=1920,1080"],
    });

    page = await browser.newPage();
  });

  it('Welcome Vite + React"', async () => {
    await page.goto("http://localhost:5173/");
    await page.waitForSelector("h1");

    const h1Text = await page.evaluate(() => {
      return document.querySelector("h1")?.textContent;
    });

    await expect(h1Text).toContain("Vite + React");
  });

  it("should click the button and check the increment", async () => {
    await page.goto("http://localhost:5173/");

    const initialButtonText = await page.evaluate(() => {
      return document.querySelector("#root > div.card > button")?.textContent;
    });

    await page.click("#root > div.card > button");

    const afterClickButtonText = await page.evaluate(() => {
      return document.querySelector("#root > div.card > button")?.textContent;
    });

    expect(afterClickButtonText).toContain(1);
    await page.waitForTimeout(4000)

  });

  afterAll(() => {
    
    browser.close()
});

});
