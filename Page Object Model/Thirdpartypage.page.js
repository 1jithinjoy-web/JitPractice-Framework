class Thirdpartypage
{
    constructor(page)
    {
        this.newThirdPartyLink=page.locator("//a[text()='New Third Party']")
        this.listlink=page.getByRole('link', { name: 'List' })

    }
}
export default Thirdpartypage