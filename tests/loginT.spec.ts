import{test,expect} from "@playwright/test";
import { LoginP } from "../Pages/LoginP";

test('login test', async({page})=>{

    const login=new LoginP(page);
    await login.gotoLoginPage();
    await login.login('standard_user','secret_sauce');
    await login.verifyLoginSuccess();
});