import { test } from "@playwright/test";
import LoginPage from "../Page Object Model/Loginpage.page.js";
import Dashboardpage from "../Page Object Model/Dashboardpage.page.js";
import Memberspage from "../Page Object Model/Memberspage.page.js";
import NewMembpage from "../Page Object Model/NewMembpage.page.js";
import Testdata1 from "C:/Users/DELL/OneDrive/Desktop(1)/Erp Project/testData/LoginCredentials.json"

test("Member creation", async ({ page }) => {

    await page.goto(Testdata1.url);

    // Create POM objects
    let loginpg = new LoginPage(page);
    let dashpg = new Dashboardpage(page);
    let memberpg = new Memberspage(page);
    let newmemberpg = new NewMembpage(page);

    // Login
    await loginpg.UsernameTF.fill(Testdata1.username);
    await loginpg.PasswordTF.fill(Testdata1.password);
    await loginpg.Loginbtn.click();

    // Navigate to New Member
    await dashpg.membersLink.click();
    await memberpg.newMemberLink.click();

    // Select Member Type: Deloitte_Sw
    await newmemberpg.memberTdropdown.click();
    await newmemberpg.deloitteOption.click();

    // Select Nature of the Member: Individual
    await newmemberpg.natureDropdown.click();
    await newmemberpg.individualOption.click();

    // Fill member details
    await newmemberpg.companyTF.fill("Deloitte");
    await newmemberpg.lastnameTF.fill(Testdata1.Lastname);
    await newmemberpg.firstnameTF.fill(Testdata1.Firstname);

    // Create Member
    await newmemberpg.createMemberbtn.click();
    await page.waitForTimeout(2000);
    await page.screenshot({path:"screenshot/ticketss.png"})
    await page.waitForTimeout(3000)
});