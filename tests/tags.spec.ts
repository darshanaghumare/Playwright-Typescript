import {test,expect} from '@playwright/test'

//approach 1
/*test('@sanity @regreesion HomePage',async({page})=>
{
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
})*/

//approach2 //preferred

test('HomePage',{tag:'@sanity'},async({page})=>
{
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
})


test('HomePage1',{tag:'@regression'},async({page})=>
{
    await page.goto('https://www.google.com/');
    await page.locator("text='Store'").click();
    await expect(page).toHaveTitle('Google Store for Google Made Devices & Accessories');
})

test('HomePage2',{tag:['@sanity','@regression']},async({page})=>
{
    await page.goto('https://www.google.com/');
    await page.locator("text='Store'").click();
    await expect(page.locator("text='Our Top Recommendations.'")).toHaveText('Our Top Recommendations.');
})