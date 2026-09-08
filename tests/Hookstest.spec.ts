import{test,expect,Page} from "@playwright/test"


let page: Page;

test.beforeAll('openapp',async({browser})=>{

    page= await browser.newPage ();
    
    await page.goto("https://demoblaze.com/index.html")

})

test.beforeEach("Login",async()=>{
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("button[onclick='logIn()']").click();
    await page.waitForTimeout(3000);
})

test.afterEach('Logout',async()=>{

    await page.locator("#logout2").click();
})

test("Find no of prod",async()=>{
    const products=page.locator("#tbodyid .hrefch");
    const count=await products.count();
    console.log(count);
    await expect(products).toHaveCount(9);
})

test('Add Products to cart',async()=>{
    await page.locator("text='Samsung galaxy s6'").click();

    //handle alert
    page.once("dialog",async(dialog)=>
    {
       expect(dialog.message()).toContain('product added');
       await dialog.accept();
    });

    await page.locator('.btn.btn-success.btn-lg').click();
});





test.afterAll("close app",async()=>{
    await page.close();
})