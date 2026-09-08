import{test,expect} from '@playwright/test'

//skip
test.skip("Test1",async({page})=>
{
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
});

//only
/*test.only("Test2",async({page})=>
{
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
});*/

//fail
test.fail("Test3",async({page})=>
{
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
});


//fixme
test.fixme("Test4",async({page})=>
{
    await page.goto('https://www.google.com/');
    //await expect(page).toHaveTitle('Google');
});

//slow
test("Test5",async({page})=>
{    
    test.slow();  //tripple the timeout default 30 sec,after 90 sec
    await page.goto('https://www.google.com/');
    //await expect(page).toHaveTitle('Google');
});

