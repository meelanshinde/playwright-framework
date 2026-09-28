import { test } from '@playwright/test'; 
test.describe("login functionality", ()=>
{
test('login to sauce demo', async ({ page }) => {
 await page.goto("https://www.saucedemo.com/")
 await page.locator("#user-name").fill("standard_user");
 await page.locator("#password").fill("secret_sauce");
 await page.locator("#login-button").click();
});
})
  test.describe("product 1", ()=>
{
    test("add to cart", async({page})=>
    {
 await page.goto("https://www.saucedemo.com/")
 await page.locator("#user-name").fill("standard_user");
 await page.locator("#password").fill("secret_sauce");
 await page.locator("#login-button").click();
 await page.waitForSelector(".title") 
// await page.locator("rgb(205, 170, 221)-to-cart-sauce-labs-bolt-t-shirt").click();
await page.locator("#add-to-cart-sauce-labs-bolt-t-shirt").click();
    })
})