import{test,expect,Locator} from '@playwright/test'

test("dialog Alert",async({page})=>
{
page.goto("https://testautomationpractice.blogspot.com/")

//simple alert
//Enable alert handling //register a dialog handler
page.on('dialog', (dialog)=>
    {
        console.log(dialog.type()) //returns type of dialog
        expect(dialog.type()).toContain('alert');
        console.log(dialog.message())  //returns mesg from dialog box
        expect(dialog.message()).toContain("I am an alert box!");
        dialog.accept();
    });

await page.locator("#alertBtn").click();
await page.waitForTimeout(2000);

})


//confirm dialog

test("confirm dialog Alert",async({page})=>
{
page.goto("https://testautomationpractice.blogspot.com/");

//simple alert
//Enable alert handling //register a dialog handler
page.on('dialog', (dialog)=>
    {
        console.log(dialog.type()) //returns type of dialog
        expect(dialog.type()).toContain('confirm');
        console.log(dialog.message())  //returns mesg from dialog box
        expect(dialog.message()).toContain("Press a button!");
        //dialog.accept();  //click on ok//accept
        dialog.dismiss();  //click on close//dismiss
    });

await page.locator("#confirmBtn").click();  //open confirmation dialog
console.log(await page.locator("#demo").innerText());
expect(page.locator("#demo")).toHaveText("you pressed Cancel!");


await page.waitForTimeout(2000);

})

//prompt alert

test.only("confirm prompt Alert",async({page})=>
{
page.goto("https://testautomationpractice.blogspot.com/");

//simple alert
//Enable alert handling //register a dialog handler
page.on('dialog', (dialog)=>
    {
        console.log(dialog.type()) //returns type of dialog
        expect(dialog.type()).toContain('prompt');
        console.log(dialog.message())  //returns mesg from dialog box
        expect(dialog.message()).toContain("Please enter your name:");

        expect(dialog.defaultValue()).toContain("Harry Potter");//checks default value
        dialog.accept('John');  //click on ok//accept
        //dialog.dismiss();  //click on close//dismiss
    });

await page.locator("#promptBtn").click();  //open confirmation dialog
console.log(await page.locator("#demo").innerText());
expect(page.locator("#demo")).toHaveText("Hello John! How are you today?");

await page.waitForTimeout(2000);

})

