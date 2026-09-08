import{test,expect,Page} from '@playwright/test'

test("Handle popups",async({browser})=>
{

    const context=await browser.newContext();
    const pages=await context.newPage();
    await pages.goto("https://testautomationpractice.blogspot.com/");
  
    //multiple popups

   await Promise.all([ pages.waitForEvent('popup'),await pages.locator("#PopUp").click()]);
   const allPopupwin=context.pages();//returns array of pages
   console.log(allPopupwin.length);  

  // console.log(allPopupwin[0].url()); //returns URL of main
   console.log(allPopupwin[1].url());
   console.log(allPopupwin[2].url())



   for(const pop of allPopupwin)

   {
      const tit=await pop.title();
      if(tit.includes('Playwright'))
      {
      await pop.locator('.getStarted_Sjon').click();
      await pop.close();  //will close playwright popup
      }

   }
    
   
   await pages.waitForTimeout(5000);

})