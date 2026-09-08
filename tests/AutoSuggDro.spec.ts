import{test,expect,Locator} from "@playwright/test";

test("verify AutoSuggest drodpown",async({page})=>{
    await page.goto("https://www.flipkart.com/");

    await page.locator("input[name='q']").fill("smart"); //search text

    //get all suggested optios -ctrl+shift+p---emulate focused page
   const options:Locator=page.locator("ui>li");
   const optionCount:number=await options.count();
   console.log("No.of options in the dropdown:"+optionCount);

   //printing all options in the dropdown

   console.log(options.nth(5).innerText());  // will return the text of 5th option in the dropdown
   
   for(let i=0;i<optionCount;i++)
    {
        console.log(options.nth(i).innerText());  ///all options in the dropdown
    }


    //select/click an option from the dropdown
    
    for(let i=0;i<optionCount;i++)
    {
        const text=await options.nth(i).innerText();  
        if(text==='smart watch'){
            options.nth(i).click();
            break;
        }
    }

   await page.waitForTimeout(5000);



})