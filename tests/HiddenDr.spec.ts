import{test,expect,Locator} from "@playwright/test";

test("verify Hidden Dropdown",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //login steps

    await page.locator("input[name=username]").fill("Admin");
    await page.locator("input[name=password]").fill("admin123");
    await page.locator("button[type=submit]").click();

    //click on PIM link
    await page.getByText("PIM").click();
    //click on job title dropdown
    await page.locator('form i').nth(2).click();
    await page.waitForTimeout(3000);

    //capture all options in the dropdown
    const options:Locator=page.locator("div[role='listbox'] span");
    const count=await options.count();
    console.log(count);

    //printing all options in the dropdown
    for(let i=0;i<count;i++)
    {
    console.log(await options.nth(i).innerText());  ///printing all options in the dropdown
    }

    //select/click on option
     for(let i=0;i<count;i++)
    {
    const opt:string=await options.nth(i).innerText();
    if(opt==="Automation Tester"){
        await options.nth(i).click();
        break;
        }  ///printing all options in the dropdown
    }
    await page.waitForTimeout(5000);
})