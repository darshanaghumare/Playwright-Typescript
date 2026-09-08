import{test,expect,Locator} from "@playwright/test";

test("verify sorted dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const dropdownOptions:Locator= page.locator("#colors>option");
     const options:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());
    const myset=new Set<string>(); //set
    const duplicateOptions:string[]=[]; //array to store duplicate options

    for(const text of options){
        if(myset.has(text)){
             duplicateOptions.push(text);
        }
        else{
           myset.add(text);
        }
    }

    console.log(duplicateOptions);

    expect(duplicateOptions.length).toBe(0);

});