import { test } from '@playwright/test'; 

test('login to screenshot', async ({ page }) => 
{
await page.goto("https:www.saucedemo.com/");
await page.screenshot({path : 'screenshot/sauce.png'})

})