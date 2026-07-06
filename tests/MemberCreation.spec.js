import { test, expect } from '@playwright/test';
import fs from "fs"
let datafile=fs.readFileSync("C:/Users/DELL/OneDrive/Desktop(1)/Erp Project/testData/LoginCredentials.json")
let data=JSON.parse(datafile)
test('Create New Member', async ({ page }) => {

  // Login 
  await page.goto(data.url)
  await page.getByPlaceholder('Login').fill(data.username)
  await page.getByPlaceholder('Password').fill(data.password)  
  await page.locator("//input[@class='button']").click()  

  //Navigate to Members Module
  await page.locator("//div[@class='mainmenu members topmenuimage']").click()

  // Click New Member
  await page.locator("//a[text()='New member']").click()

//   // Fill Member Details

  //await page.locator("//span[@id='select2-morphy-container']").click()
  //await page.locator("//li[@id='select2-morphy-result-xgak-phy']").click()
  await page.locator("//input[@name='lastname']").fill(data.Lastname)  
  await page.locator("//input[@name='firstname']").fill(data.Firstname)  
  await page.locator("//input[@name='member_email']").fill(data.email)
  await page.locator("//input[@name='phone']").fill(data.number)
  await page.locator("//textarea[@name='address']").fill(data.address)
  await page.waitForTimeout(3000)

  // Save Member
  await page.locator("//input[@value='Create member']").click()
  await page.waitForTimeout(3000)

//   // Verification
//   // await expect(page.locator('body')).toContainText('John')    
//   // await page.waitForTimeout(5000)  

})