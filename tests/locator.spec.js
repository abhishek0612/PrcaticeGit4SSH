const {test,expect} =require('@playwright/test');

test('locator practice',async ({page})=>{
 await page.goto("https://www.saucedemo.com/");
 const userName= page.locator("//input[@placeholder='Username']");
await userName.fill('standard_user');
//await page.fill('//input[@placeholder='Username']','standard_user');
await page.locator('#password').fill('secret_sauce');


await page.click("//input[@name='login-button']");
await expect(page).toHaveURL(/inventory.html/);
await expect(page.locator('.title')).toHaveText('Products');
 console.log(await page.locator('.title').textContent());

 await expect(page.locator("//div[text()='Sauce Labs Backpack']")).toBeVisible();
     
});