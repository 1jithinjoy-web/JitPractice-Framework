class Memberspage
{
    constructor(page)
    {
        this.newMemberLink=page.locator("//a[text()='New member']")        
        this.listLink=page.locator("//a[@title='List']")       
    }
}
export default Memberspage