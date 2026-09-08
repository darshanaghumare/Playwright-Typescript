import {test,expect,Locator} from "@playwright/test";

test("verify actions",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Text Input//Text Box
    const text:Locator=page.locator('#name');
    await expect(text).toBeVisible();
    await expect(text).toBeEnabled();

    const maxL:string|null =await text.getAttribute("maxLength");   //value of the maxLength attribute of the text field.
    expect(maxL).toBe("15");

    await text.fill("John");

    const entervalue:string=await text.inputValue();  //get the value of the text field.
    console.log(entervalue);  //get the value of the text field.//john 
    expect(entervalue).toBe("John");

    await page.waitForTimeout(5000);

})

//Radio Button
test("verify checkBox and Radio Button",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const femRad:Locator=page.locator("#female");
    await expect(femRad).toBeVisible();
    await expect(femRad).toBeEnabled();
    
    expect(await femRad.isChecked()).toBe(false); //false
    await femRad.check();  //select radio button
    expect(await femRad.isChecked()).toBe(true);  //true
    await expect(femRad).toBeChecked();  //true //preferable
})

//checkbox
test.only("verify checkBox",async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/");
    //specific the checkbox by using label text.
   const checkBox:Locator=page.getByLabel('Sunday');
    await expect(checkBox).toBeVisible();
    //await checkBox.check();
    //await expect(checkBox).toBeChecked();

    //capture all the checkboxes and select all the checkboxes.
    const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    const checksB:Locator[]= days.map(index => page.getByLabel(index));
    expect(checksB.length).toBe(7);
 
    //select all checkboxes
    for(const check of checksB)
    {
        await check.check();
        await expect(check).toBeChecked();
    }

    //last 3 checkboxes
    for (const check of checksB.slice(-3)){
        await check.uncheck();
        await expect(check).not.toBeChecked();  //not operator is used to check the checkbox is not checked.
    
     
    }

   

      //Toggle checkbox:-if checked uncheck it and if unchecked check it.

      for(const check of checksB)
    {

        if(await check.isChecked())
        {
        //if checkboxex is checked then uncheck it.
         await check.uncheck();
        await expect(check).not.toBeChecked(); 
        }
        
        else 
        {
             //applicable only if no checkbox.
        await check.check();
        await expect(check).toBeChecked();

        }
      
    }
     await page.waitForTimeout(3000);

     //Random checkbox selection--using index to select the checkbox.
    const indexes:number[]=[1,3,6];

    for(const i of indexes)
    {
       await checksB[i].check();
       await expect(checksB[i]).toBeChecked();
    }
    await page.waitForTimeout(3000);

    //select checkBox by label
    const weekN:string='Friday';

    for(const label of days )
    {
        if(label.toLowerCase()===weekN.toLowerCase())
        {
           const checkbox= page.getByLabel(label)
           checkBox.check();
           await expect(checkBox).toBeChecked();
        }
    }
      

});