import {test,expect} from '@playwright/test'

test("screenshot",async({page})=>
{
    await page.goto("https://demowebshop.tricentis.com/")

    const timestamp=Date.now()  //current date and time

    //page screenshot
   // await page.screenshot({path:'screenshots/'+'homepage'+timestamp+'.png'})
    
    //full page screenshot
    //await page.screenshot({path:'screenshots/'+'fullpage'+timestamp+'.png',fullPage:true})
    
    //specific element screenshot
    await page.locator("img[alt='Tricentis Demo Web Shop']").screenshot({path:'screenshots/'+'logo'+timestamp+'.png'})


})

test.only("screenshot from config",async({page})=>
{
 await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');


})