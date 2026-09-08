import{test} from '@playwright/test'

//test.describe.configure({mode:'serial'})  //serial mode

test.describe.configure({mode:'parallel'}) // parallel mode

test('Test1',async()=>
{
  console.log("This is test1")
});

test('Test2',async()=>
{
  console.log("This is test2")
});


test('Test3',async()=>
{
  console.log("This is test3")
});

test('Test4',async()=>
{
  console.log("This is test4")
});

test('Test5',async()=>
{
  console.log("This is test5")
});