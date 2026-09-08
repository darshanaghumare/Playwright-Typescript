import {test,expect,Locator} from '@playwright/test';
test("verify XpathLoc",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");

     //absolute xpath
     const logo:Locator=page.locator("xpath=/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
     await expect(logo).toBeVisible();

     //Relative xpath
     const logo1:Locator=page.locator("//img[@alt='Tricentis Demo Web Shop']");
     await expect(logo1).toBeVisible();

     //contains() method is used to locate the element based on the text content of the element.
      const products:Locator=page.locator("//h2/a[contains(@href,'computer')]"); //group of elements
      const prodcounts:number=await products.count();
      console.log("TotalProducts are:",prodcounts);
      expect(prodcounts).toBeGreaterThan(0);
      

      //console.log(await products.textContent());  //strict mode violetion ///will print the text of all the products
     console.log(await products.first().textContent());
     console.log(await products.last().textContent());
     console.log(await products.nth(2).textContent());  //index starts with 0

  let productTitles:string[]=await products.allTextContents();// getting all the text of the products in an array

  for(let pt of productTitles){
    console.log(pt);  
  }



  //starts-with() method is used to locate the element based on the text content of the element.
  const buildproducts:Locator=page.locator("//h2/a[starts-with(@href,'/build')]");
  const buildCount:number=await buildproducts.count();
  expect(buildCount).toBeGreaterThan(0);

  //last() method is used to locate the last element of the group of elements.
  
 const lastSocialLink:Locator=page.locator('//div[@class="columns follow-us"]/li[last()]/a');
 await expect(lastSocialLink).toBeVisible();
 console.log("last Social Link:", await lastSocialLink.textContent());
})