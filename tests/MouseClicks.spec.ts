import{test,expect} from "@playwright/test";

test("Mouse Clicks",async({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

    //double click
    await page.getByText('Double-Click Me To See Alert').dblclick();

    //right click //context click
    await page.getByText('right click me').click({button:'right'});
    
    //shift click
    await page.goto('https://the-internet.herokuapp.com/shifting_content');
    await page.getByText('Example 1: Menu Element').click({modifiers:["Shift"]});

    await page.waitForTimeout(5000);

})