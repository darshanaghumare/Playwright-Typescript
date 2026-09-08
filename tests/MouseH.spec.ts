import{test,expect} from '@playwright/test';

test("Mouse Hover", async({page})=>{
    await page.goto("https://www.bigbasket.com/");
    await page.locator("//button[@id='headlessui-menu-button-:Rld956:']").click();
    await page.getByRole('link',{name:'Beverages'}).last().hover();
    await page.getByRole('link',{name:'Tea'}).last().hover();
    await page.getByRole('link',{name:'Green Tea'}).click();
})