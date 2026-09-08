import{test,expect,Locator}from "@playwright/test";

test("comparing methods",async({page})=>{

    page.goto("https://demowebshop.tricentis.com/");

    const products:Locator=page.locator('.product-title');
    //innerText() vs textContent()
   console.log(await products.nth(1).innerText()); //visible, actual text //string
   console.log(await products.nth(1).textContent()); //spaces,lineBreaks //null and string
   
   //inerText() vs textContent() for all elements
   const count:number=await products.count();

   for(let i=0;i<count;i++)
   {
   // const productName:string=await products.nth(i).innerText();
    //console.log(productName);

    const productName1:string | null=await products.nth(i).textContent();
    console.log(productName1?.trim());
   }


  //allInnerText() vs allTextContents()
    
   // const prdoN:string[]=await products.allInnerTexts(); //plain text
   // console.log(prdoN);

    const prdoN1:string[]=await products.allTextContents(); //spaces
    console.log(prdoN1);
   const productName:string[]=prdoN1.map(text=>text.trim());
   console.log(productName);

   //all()-converts locator type of array//returns array of locators

  const productsLoc:Locator[]=await products.all(); //capture locator
  console.log(await productsLoc[1].innerText());

 //for of loop
  for(let productL of productsLoc){
    console.log(await productL.innerText());
  }
  
  //for in loop
  for(let i in productsLoc){
    console.log(await productsLoc[i].innerText());
  }


   await page.waitForTimeout(5000);
})


