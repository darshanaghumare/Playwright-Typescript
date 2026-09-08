import{test,expect,Locator}from "@playwright/test";

test("Static tab",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

const table:Locator=page.locator("table[name='BookTable']");
await expect(table).toBeVisible();
//count of rows

const rows:Locator=table.locator("tr");
await expect(rows).toHaveCount(7);

const rowcount:Number=await rows.count();
console.log(rowcount);
expect(rowcount).toBe(7);


//count of columns

const columns:Locator=await rows.locator("th");
expect(columns).toHaveCount(4);

const colcount:Number=await columns.count();
console.log(colcount);
expect(colcount).toBe(4);

//Read all data from 2nd row
const secondrowcells:Locator=rows.nth(2).locator('td');
const secondrowdata:string[]=await secondrowcells.allInnerTexts();
console.log(secondrowdata);

await expect(secondrowcells).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ]);

//for of loop
for(let text of secondrowdata)
{
    console.log(text);
}

//read all data exluding header row
const allrowsdata=await rows.all();
for(let rowda of allrowsdata.slice(1)) //slice (1) will skip header row
{
    const colu=await rowda.locator('td').allInnerTexts();
    console.log(colu.join('\t'));
}

//print booknames where author is mukesh
const MukeshB:string[]=[];
   for (let row of allrowsdata.slice(1)) {
    const cells=await row.locator('td').allInnerTexts();
    const author=cells[1];
    const bookname=cells[0];
    if(author=='Mukesh')
    {
        console.log(`${author},\t ${bookname}`);
        MukeshB.push(bookname);
    }
}
   expect(MukeshB).toHaveLength(2);


   //calculate total price of books

   let totalprice=0;
    for (let row of allrowsdata.slice(1)) {
    const cells=await row.locator('td').allInnerTexts();
    const price=cells[3];

    totalprice=totalprice+parseInt(price); //convert string into number.
   
}
console.log(totalprice);
expect(totalprice).toBe(7100);


});