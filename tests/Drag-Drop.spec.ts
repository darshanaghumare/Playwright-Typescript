import{test,expect} from '@playwright/test';

test("Drag and Drop",async({page})=>{
  
    await page.goto("https://jqueryui.com/resources/demos/droppable/default.html");
    //single method
    //await page.locator("#draggable").dragTo(page.locator("#droppable"));
    
    //multiple 
    await page.locator("#draggable").hover();
    await page.mouse.down();
    await page.locator("#droppable").hover();
    await page.mouse.up();

    await page.waitForTimeout(5000);

})