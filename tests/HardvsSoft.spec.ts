import{test,expect} from '@playwright/test'

test("HardvsSoft",async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    //Hard assertion//page and locator
  /* await expect(page).toHaveTitle('Demo Web Shop');
   await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

   const logo=page.locator("img[alt='Tricentis Demo Web Shop']");
   expect(logo).toBeVisible();
*/


   //soft assertion

   await expect.soft(page).toHaveTitle('Demo Web Shop2');//failed
   await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com/");

   const logo1=page.locator("img[alt='Tricentis Demo Web Shop']");
   expect.soft(logo1).toBeVisible();


   await page.waitForTimeout(5000);

});