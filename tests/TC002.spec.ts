import {test} from "@playwright/test";

test('Login_Logout', async ({page}) => {
    //--Test Steps
await page.goto("https://sureshitacademy.in/hrms/login.php");
await page.waitForTimeout(3000);
console.log("Application Opened");
//Enter username & password
await page.locator("//input[@name='txtUserName']").fill("sureshit");
await page.locator("//input[@name='txtPassword']").fill("sureshit");
await page.waitForTimeout(3000);
console.log("Username & Password Entered");
//Click on Login button
await page.locator("//input[@value='Login']").click();
await page.waitForTimeout(3000);
console.log("Login completed");
//Click on Logout link
await page.getByRole('link', {name: 'Logout'}).click();
await page.waitForTimeout(3000);
console.log("Logout completed");
console.log("Logout Done");
});
