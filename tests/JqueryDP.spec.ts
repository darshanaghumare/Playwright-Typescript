import {test,expect,Locator,Page} from"@playwright/test"

async
function selectdate(targetYear:string,tragetMonth:string,targetDate:string,page:Page,isFuture:boolean)

{

    while(true)
      {
       const currentMonth= await page.locator(".ui-datepicker-month").textContent(); 
       const currentyear= await page.locator(".ui-datepicker-year").textContent();

       if(currentMonth===month && currentyear===year)
       {
        break;
       }

    if(isFuture)
    {
      await page.locator('.ui-datepicker-next').click();
    }

   else{
      await page.locator('.ui-datepicker-prev').click();

   }
}
      
     const alldates=await page.locator(".ui-datepicker-calender td").all(); //all()-in form of array

     for(let date1 of alldates)
    {

       const datetext=await date1.innerText();
       if(datetext===date)
        {
        await date1.click();
        break;
       }
     }
         
    }

}

test ("Jquery DatePicker", async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const dateI:Locator=page.locator("#datepicker");
    expect(dateI).toBeVisible();
     1.//using fill()
    dateI.fill("06/28/2025");   //mmddyyyy

      2.//using date picker
      dateI.click();
      const year='2023';
      const month='May';
      const date='10';
    
      selectdate(year,month,date,page,true)

      const expecteddate='10/04/2026';
      await expect(dateI).toHaveValue(expecteddate);
   
    await page.waitForTimeout(3000);

    

})