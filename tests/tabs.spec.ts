import{test,expect,chromium} from '@playwright/test'

test("Handle tabs",async()=>
{

    const browser=await chromium.launch();
    const context=await browser.newContext();

    const parentpage=await context.newPage();
    await parentpage.goto("https://testautomationpractice.blogspot.com/");
   
    //should run paralley
   const [childPage]=await Promise.all([context.waitForEvent('page'),parentpage.locator("button:has-text('New Tab')").click()]);

   // context.waitForEvent('page'); //pending,fulfilled,rejected
    //parentpage.locator("button:has-text('New Tab')").click(); //opens new tab
 
    //approach 1:switch between pages and get titles (using context)//when multiple pages

 const pages=context.pages();
 console.log(pages.length);

 console.log(await pages[0].title());
 console.log(await pages[1].title());

//approach 2:alternate //for 2 pages only

 console.log(await parentpage.title());
 console.log(await childPage.title());


})