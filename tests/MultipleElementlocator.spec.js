const {test,expect}= require('@playwright/test');

test('MultipleLocator',async ({page})=>{
 await page.goto("https://www.saucedemo.com/");

const userName=page.locator('#user-name');
const password=page.locator('#password');
const loginButton=page.locator('input#login-button');

await userName.fill('standard_user');
await password.fill('secret_sauce');
await loginButton.click();

const productNames = await page.$$('#inventory_item_name ');
//const productCount= (await productNames).length;
console.log('Total no. of Product:',productNames.length);

//2nd approach to count the web element
const count= await productNames.count();
console.log(count);

/*for(const product of productNames){
const name=await product.textContent()
console.log(name)


}*/



});