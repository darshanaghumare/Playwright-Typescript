import{test,expect} from '@playwright/test'

const serachitem:string[]=['Laptop','Gift card','Smartphone','Computer'];

//using for-of loop
/*for(const item of serachitem )
{
test(`search test for ${item}`,async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/');
    await page.locator('#small-searchterms').fill(item);
    await page.locator("input[value='Search']").click();
    await expect.soft(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase:true});
    
});
}  
*/ 

//using for each function
/*serachitem.forEach((item)=>{

test(`search test for ${item}`,async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/');
    await page.locator('#small-searchterms').fill(item);
    await page.locator("input[value='Search']").click();
    await expect.soft(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase:true});
    
});
})*/

//describe--group
test.describe("searching item",async()=>{

serachitem.forEach((item)=>{
test(`search test for ${item}`,async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/');
    await page.locator('#small-searchterms').fill(item);
    await page.locator("input[value='Search']").click();
    await expect.soft(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase:true});
    
});
})
})

