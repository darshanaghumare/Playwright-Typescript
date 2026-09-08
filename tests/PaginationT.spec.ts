import{expect,test,Locator} from '@playwright/test';

test ("Read data from all pages",async({page})=>{

    page.goto("https://datatables.net/example/basic_init/zero_configuration.html");

    let morepages=true;
  while(morepages){
    const rows=await page.locator("#example tbody tr").all();
    for (let row of rows)
    {
        console.log(await row.innerText());
    }

 const NextBt:Locator=page.locator("//button[aria-label='Next']");
 const isDisabled=NextBt.getAttribute('class');

 if(isDisabled.includes
 {
    morepages=false;
 }
 else{
    await NextBt.click();
 }
 

    }



})