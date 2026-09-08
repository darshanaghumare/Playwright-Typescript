import{test,expect,Locator} from "@playwright/test";

test("verify single dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //select options from dropdown
    //await page.locator('#country').selectOption('India');
    //await page.locator('#country').selectOption({value:'uk'}); //by using value attribute
    //await page.locator('#country').selectOption({label:'USA'}); //by using label attribute
    await page.locator('#country').selectOption({index:3}); //by using index attribute
   

    //check no.of optios in dropdown
    const options:Locator=page.locator('#country>option');
    await expect(options).toHaveCount(10);

    //check an option present in the dropdown.
     const Otext:string[]=(await options.allTextContents()).map(text=>text.trim());
     console.log(Otext);

     expect(Otext).toContain('India');

     //printing options from the dropdown
     for(const text of Otext){
        console.log(text);
     }


    await page.waitForTimeout(5000);

})