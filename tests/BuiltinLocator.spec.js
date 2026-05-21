const {test,expect} = require('@playwright/test');

test('builtinLocator',async ({page})=>{
    await page.goto('https://www.saucedemo.com/');

    //enter username
    await page.getByPlaceholder('Username').fill('standard_user');

    //enter password
    await page.getByPlaceholder('Password').fill('secret_sauce');

    //click on login button
    await page.getByRole('Button',{name:'Login'}).click();

    //Assertions 
    await expect(page).toHaveURL(/inventory.html/);

    const text = page.getByText('Products');

    await expect(text).toBeVisible();

    //click on add to cart on first 
    await page.getByRole('button',{name:'Add to cart'}).first().click();

    await page.getByAltText('Sauce Labs Backpack').click();

     






});