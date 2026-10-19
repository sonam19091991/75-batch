//--Test Steps
await page.goto(url); 
await page.waitForTimeout(3000);
console.log("Application Opened");
//Verify Login Name lable / Text
await expect(page.locator("//td[text()='Login Name : ']")).toHaveText('Login Name : ');
console.log("Login Name lable / Text Verified");
//Enter username and password
//--Test Data : Hard Coded
//await page.locator("//input[@name='txtUserName']").fill("sureshit");
//await page.locator("//input[@name='txtPassword']").fill("sureshit");
//Test Data : using variable
await page.locator("//input[@name='txtUserName']").fill(username);
await page.locator("//input[@name='txtPassword']").fill(password);
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