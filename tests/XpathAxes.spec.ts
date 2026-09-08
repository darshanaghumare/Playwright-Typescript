import{test,expect,Locator} from "@playwright/test";

test("Xpath Axes",async({page})=>{
    await page.goto("https://www.w3schools.com/html/html_tables.asp");
    
    //self axes is used to locate the current element itself.
    const self:Locator=page.locator("//td[normalize-space()='Germany']/self::td");
    await expect(self).toHaveText('Germany');
   //parent axes is used to locate the parent element of the current element.
   const parent:Locator=page.locator("//td[normalize-space()='Germany']/parent::tr");
   await expect(parent).toContainText('Alfreds Futterkiste Maria Anders Germany');
//child axes is used to locate the child element of the current element.
 
const child:Locator=page.locator("//table[@id='customers']//tr[2]/child::td");
await expect(child).toHaveCount(3);

//ancestor axes is used to locate the ancestor element of the current element.
const ancestor:Locator=page.locator("//td[normalize-space()='Germany']/ancestor::table");
await expect(ancestor).toHaveAttribute('id','customers');

//descendant axes is used to locate the descendant element of the current element.
const descendant:Locator=page.locator("//table[@id='customers']/descendant::td");
await expect(descendant).toHaveCount(18);

//following axes is used to locate the following element of the current element.
const following:Locator=page.locator("//td[normalize-space()='Germany']/following::td[1]");
await expect(following).toHaveText("Centro comercial Moctezuma");
//following-sibling axes is used to locate the following sibling element of the current element.
const followingSibling:Locator=page.locator("//td[normalize-space()='Maria Anders']/following-sibling::td");
await expect(followingSibling).toHaveCount(1);
//preceding axes is used to locate the preceding element of the current element.
const preceding:Locator=page.locator("//td[normalize-space()='Germany']/preceding::td[1]");
await expect(preceding).toHaveText("Maria Anders");
//preceding-sibling axes is used to locate the preceding sibling element of the current element.
const precedingSibling:Locator=page.locator("//td[normalize-space()='Germany']/preceding-sibling::td");
await expect(precedingSibling).toHaveCount(2);
await expect(precedingSibling.first()).toHaveText("Alfreds Futterkiste");
}
)