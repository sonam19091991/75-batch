import {test} from '@playwright/test'

test('First TC001',async({page})=>{
    //-Test Steps
await page.goto("https://sureshitacademy.in/hrms/login.php");
await page.waitForTimeout(3000);
console.log("Application opened");
});