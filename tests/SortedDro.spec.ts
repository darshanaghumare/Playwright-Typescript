import{test,expect,Locator} from "@playwright/test";

test("verify sorted dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //const animalOptions:Locator= page.locator("#animals>option");
    const colorsOptions:Locator= page.locator("#colors>option");
   // console.log(await animalOptions.allTextContents());

   const sortedOptions:string[]= (await colorsOptions.allTextContents()).map(text => text.trim());
   
   const sortedOptions1:string[]=[...sortedOptions];   //spread operator is used to create a copy of the array. If we use sortedOptions1=sortedOptions then both will point to the same array and if we sort one array then the other array will also be sorted. 
   const sortedlist:string[]=[...sortedOptions].sort();

   console.log(sortedOptions1);
   console.log(sortedlist);

  // expect(sortedOptions1).toEqual(sortedlist);  //toEqual is used to compare the values of the array. It will check the values of the array and not the reference of the array. If we use toBe then it will check the reference of the array and if both are pointing to different arrays then it will fail even if the values are same.

    await page.waitForTimeout(5000);


});