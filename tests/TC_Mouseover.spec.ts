import {test} from '@playwright/test';

test('Mouseover', async ({ page }) => {
    await page.goto('https://sureshitacademy.in/hrms/login.php');
    await page.waitForTimeout(3000);
    console.log("Application Opened");
    //Enter username and password
    await page.locator("//input[@name='txtUserName']").fill("sureshit");
    await page.locator("//input[@name='txtPassword']").fill("sureshit");
    await page.waitForTimeout(3000);
    console.log("Username and Password Entered");
    //click on Login Button
    await page.locator("//input[@name='Submit']").click();
    await page.waitForTimeout(3000);
    console.log("Clicked on Login Button");
    console.log("Login completed");
    //Mouseover on PIM main menu
    await page.getByText('PIM').hover();
    await page.waitForTimeout(4000);
    console.log("Mouseover on PIM main menu");
    //click on AddNewEmployee sub menu
    await page.getByText('Add Employee').click();
    await page.waitForTimeout(4000);
    console.log("Clicked on AddNewEmployee sub menu");
    console.log("AddNewEmployee page opened");
    //Click on Logout link
    await page.getByRole('link', { name: 'Logout' }).click();
    await page.waitForTimeout(3000);
    console.log("Clicked on Logout link");
    console.log("Logout completed");
});