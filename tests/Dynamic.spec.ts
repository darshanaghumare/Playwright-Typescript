import{test,expect,Locator} from '@playwright/test';

test("Dynamic", async({page})=>{

    page.goto("https://practice.expandtesting.com/dynamic-table");

     const table:Locator=page.locator("table.table tbody")
     expect(table).toBeVisible();

     //select all rows,find no of rows
         const rows:Locator[]= await table.locator('tr').all();
         console.log(rows.length);
        // expect(rows).toHaveLength(4);
        

         let cpuL=' ';
         for(const row of rows){
            const processName:string=await row.locator("td").nth(0).innerText();
            if(processName=='chrome')
            {
                cpuL=await row.locator("td",{hasText:'%'}).innerText();
                console.log(cpuL);
                break;
            }
        
        }
      

       // step2- compare with the value in yellow table

      let chrometext:string=await page.locator("#chrome-cpu").innerText();
      console.log(chrometext);

      if(chrometext.includes(cpuL))
      {
        console.log("cpu load of chrome is equal");
      }
      else{
        console.log("cpu load of chrome is not equal");
      }
        
      expect(chrometext).toContain(cpuL);

        await page.waitForTimeout(5000);

     //get value of CPU load
     //each row from a table



});