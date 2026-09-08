import{test,expect,Locator} from "@playwright/test";

test("verify multiselect dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

   // await page.locator("#colors").selectOption(['red','green','blue']); //using visible text
   // await page.locator("#colors").selectOption([{value:'white'},{value:'yellow'}]); //using value attribute
   //await page.locator("#colors").selectOption([{label:'Green'},{label:'Red'}]); //using label attribute
    await page.locator("#colors").selectOption([{index:0},{index:2},{index:4}]); //using index attribute
    await page.waitForTimeout(5000);

})