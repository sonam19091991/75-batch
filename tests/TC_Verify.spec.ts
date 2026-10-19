import {test, expect} from '@playwright/test';

test('Verification', async ({ page }) => {
//--Test Steps
await page.goto('https://sureshitacademy.in/hrms/login.php');
await page.waitForTimeout(3000);
console.log("Application Opened");
//Verify Login Name lable / Text
await expect(page.locator("//td[text()='Login Name : ']")).toHaveText('Login Name : ');
console.log("Login Name lable / Text Verified");
//Enter username and password
await page.locator("//input[@name='txtUserName']").fill("sureshit");
await page.locator("//input[@name='txtPassword']").fill("sureshit");
await page.waitForTimeout(3000);
console.log("Username and Password Entered");
//verify Login Button is visible
await expect(page.locator("//input[@name='Submit']")).toBeVisible();
console.log("Login Button is visible");
//Click on Login Button
await page.locator("//input[@name='Submit']").click();
await page.waitForTimeout(3000);
console.log("Clicked on Login Button");
console.log("Login completed");
//verify page title
await expect(page).toHaveTitle("SureshIT");
//verify logout link
await expect(page.locator("//a[text()='Logout']")).toBeVisible();
//Click on Logout link
await page.locator("//a[text()='Logout']").click();
await page.waitForTimeout(3000);
console.log("Clicked on Logout link");
console.log("Logout completed");
});