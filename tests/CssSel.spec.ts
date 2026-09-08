import {test,expect,Locator} from "@playwright/test";


test("verify css selectors",async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    //tag#id
    const search:Locator=page.locator("input#small-searchterms");
    await expect(search).toBeVisible();
    await search.fill("laptop");
    await page.waitForTimeout(5000);

    //tag.class--class atrribute should be there.
    await page.locator("input.search-box-text").fill("laptop");

    //tag[attribute='value']
    await page.locator("input[name=q]").fill("laptop");

    //tag.class[attribute='value']
    await page.locator("input.search-box-text[value='Search store']").fill("laptop");
  
    
})