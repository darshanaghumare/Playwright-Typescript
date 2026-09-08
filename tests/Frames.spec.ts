import {test,expect,Locator} from '@playwright/test'

test("frames", async({page})=>
{
  await page.goto("https://ui.vision/demo/webtest/frames");

  //total no of frames present on webpage
  const frames=page.frames();
  console.log(frames.length)

  //approach 1: using page.frame()

/* const frame1=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1"});
  if(frame1)
  {
     await frame1.locator("[name='mytext1']").fill("Hello"); //regular/recommended
     //await frame1.fill("[name='mytext1']", "Hello");
  }
  else{
    console.log("Frame is not available");
  }

  */
  // Approach 2-usig Frame Locator

//  const frame1=page.frameLocator("[src='frame_1.html']").locator("[name='mytext1']").fill("Hello");
  
  

  //handle inner frames if not required if else then use ?

   const frame3= page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3'});
   await frame3?.locator("[name='mytext3']").fill("welcome");
   const childFrames=frame3?.childFrames()
   console.log(childFrames?.length);// length of child frame

   const radio=childFrames[0].getByLabel("I am a human");
   await radio.check();  //will select radio button 
   await expect(radio).toBeChecked();  

   

   await page.waitForTimeout(5000);
})