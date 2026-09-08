import{test,expect,Page} from '@playwright/test'

test("Authi popups",async({browser})=>
{

    const context=await browser.newContext({httpCredentials:{username:'admin',password:'admin'}});
    const pages=await context.newPage();

    //approach1=directly pass user and pass
   /* await pages.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
  
   await pages.waitForLoadState(); //wait for page loaded completely
   
   await expect(pages.locator('text=Congratulations')).toBeVisible();

*/

   //approach2 pass login along with browser context//always preferable

    await pages.goto("https://the-internet.herokuapp.com/basic_auth");

    await pages.waitForLoadState(); //wait for page loaded completely
   
    await expect(pages.locator('text=Congratulations')).toBeVisible();

    await pages.waitForTimeout(5000);

})