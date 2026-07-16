import {test} from "@playwright/test"
import LoginPage from "../Page Object Model/Loginpage.page"
import Dashboardpage from "../Page Object Model/Dashboardpage.page"
import Thirdpartypage from "../Page Object Model/Thirdpartypage.page"
import NewThirdpartypage from "../Page Object Model/NewThirdpartypage.page"
test("Third party creation",async({page})=>{
    let loginpg=new LoginPage(page)
    let dashpg=new Dashboardpage(page)
    let thirdpartypg=new Thirdpartypage(page)
    let newthirdpartypg=new NewThirdpartypage(page)




    await page.goto("http://49.249.29.4:8889/dolibarr/index.php")
    await loginpg.UsernameTF.fill("admin")
    await loginpg.PasswordTF.fill("admin123")
    await loginpg.Loginbtn.click()
    await dashpg.thirdPartyLink.click()
    await thirdpartypg.newThirdPartyLink.click()
    await page.waitForTimeout(3000)
    await newthirdpartypg.nameTF.fill("Ali baba")
    await page.waitForTimeout(1000)
    await newthirdpartypg.prospectORcustomerDD.selectOption({value:'1'})
    await page.waitForTimeout(3000)
    await newthirdpartypg.vendorDD.click()
    // await newthirdpartypg.vendorDDAllopts.first().waitfor()
        await newthirdpartypg.vendorDDAllopts.waitforText("Yes")
    let options=await newthirdpartypg.vendorDDAllopts.all()
    for(let opt of options )
    {
        let text=await opt.textContent()
        if(text.includes("Yes")){
            await opt.click()
        }
    }
    await page.waitForTimeout(3000)
    
})
