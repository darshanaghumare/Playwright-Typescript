import {test, expect,Locator} from '@playwright/test';

test("verify BuiltLoc",async({page})=>{
    await page.goto("https://automationexercise.com/");
    //locating images-altText()
    const logo:Locator= page.getByAltText("Website for automation practice");
    await expect(logo).toBeVisible();
   //getByText() method is used to locate the element based on the text content of the element.
   const text:Locator=page.getByText("Subscription");
   expect(text).toBeVisible();

   //single statement
   //await expect(page.getByText("Welcome to our store")).toBeVisible();

   //getByRole() method is used to locate the element based on the role of the element.
    await page.getByRole("link",{name:"Products"}).click();
    await expect(page.getByRole("heading",{name:" Products"})).toBeVisible();
   //getByLable() method is used to locate the element based on the label of the element.
   //await page.getByLabel("First name:").fill("John");
   //await page.getByLabel("Last name:").fill("kendy");
   //page.getByPlaceholder() method is used to locate the element based on the placeholder of the element.
   //await page.getByPlaceholder("Search store").fill("Apple");

   //geyByTitle() method is used to locate the element based on the title of the element.
   //getByTestId() method is used to locate the element based on the test id of the element.

})
