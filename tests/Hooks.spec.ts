import{test,expect} from '@playwright/test'

test.beforeAll('BeforeAll',async()=>{
    console.log("BeforeAll...")
})

test.afterAll('AfterAll',async()=>{
    console.log("AfterAll...")
})

test.beforeEach('BeforeEach',async()=>{
    console.log("This is before each...")
})

test.afterEach('AfterEach',async()=>{
    console.log("This is after each...")
})




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