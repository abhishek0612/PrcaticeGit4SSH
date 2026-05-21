const {test,expect} = require ('@playwright/test')

test('open google page',async({page})=>
    {
await page.goto("https://rahulshettyacademy.com/locatorspractice/")
const pageTitle = await page.title()
console.log("page title",pageTitle)
  const pageUrl = page.url()
   console.log(pageUrl)
//await expect(page).toHaveTitle(/Rahul Shetty Academy - Login page/);

})
