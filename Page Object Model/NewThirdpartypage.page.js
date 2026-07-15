class NewThirdpartypage
{
    constructor(page)
    {
        this.nameTF=page.locator("//input[@id='name']")
        this.prospectORcustomerDD=page.locator("//select[@id='customerprospect']")
        this.vendorDDAllopts=page.locator("//ul[@id='select2-fournisseur-results']")
        this.vendorDD=page.locator("//span[@id='select2-fournisseur-container']")
        this.createThirdPartyBtn=page.locator("//input[@value='Create third party']")
    }
}
export default NewThirdpartypage