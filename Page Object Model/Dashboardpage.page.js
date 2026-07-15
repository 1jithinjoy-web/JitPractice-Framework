import { DefaultSerializer } from "node:v8"

class Dashboardpage
{
    constructor(page)
    {
        this.homeLink=page.locator("//span[text()='Home']")
        this.membersLink=page.locator("//span[text()='Members']")
        this.thirdPartyLink=page.locator("//span[text()='Third-parties']")
        this.prodAndserLink=page.locator("//span[text()='Products | Services']")
        this.mrpLink=page.locator("//span[text()='MRP']")
        this.projectsLink=page.locator("//span[text()='Projects']")
        this.commerceLink=page.locator("//span[text()='Commerce']")
        this.billandPayLink=page.locator("//span[text()='Billing | Payment']")
        this.bankandCashLink=page.locator("//span[text()='Banks | Cash']")
        this.accountsLink=page.locator("//span[text()='Accounting']")
        this.hrmLink=page.locator("//span[text()='HRM']")
        this.documentsLink=page.locator("//span[text()='Documents']")        
        this.agendaLink=page.locator("//span[text()='Agenda']")        
        this.ticketLink=page.locator("//span[text()='Tickets']")        
        this.toolsLink=page.locator("//span[text()='Tools']")          
    }
}
export default Dashboardpage