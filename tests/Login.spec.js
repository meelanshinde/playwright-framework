
import { test } from '@playwright/test'; 
import { LoginPage } from '../pages/LoginPage';
 test('login to sauce demo', async ({ page }) => {
 const login = new LoginPage(page); 
   await login.goToLoginPage();
   await login.login('standard_user', 'secret_sauce');
   //await expect(page).toHaveURL(/inventory/); 
   await page.waitForTimeout(3000);
});