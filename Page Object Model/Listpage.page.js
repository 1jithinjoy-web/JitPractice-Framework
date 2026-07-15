class Listpage
{
    constructor(page)
    {
        this.firstnameSearchTF=await page.locator("//input[@name='search_firstname']")        
        this.lastnameSearchTF=await page.locator("//input[@name='search_lastname']")
        this.searchIcon=await page.locator("//span[@class='fas fa-search']")
    }
}
export default Listpage