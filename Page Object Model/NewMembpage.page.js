class NewMembpage {
    constructor(page) {
        // Member Type
        this.memberTdropdown = page.locator("#select2-typeid-container");
        this.deloitteOption = page
            .locator("#select2-typeid-results > li")
            .filter({ hasText: "Deloitte_Sw" });

        // Nature of the Member
        this.natureDropdown = page.locator("#select2-morphy-container");
        this.individualOption = page
            .locator(".select2-results__option")
            .filter({ hasText: "Individual" });

        // Member details
        this.companyTF = page.locator("//input[@name='societe']");
        this.lastnameTF = page.locator("//input[@name='lastname']");
        this.firstnameTF = page.locator("//input[@name='firstname']");

        // Create Member
        this.createMemberbtn = page.locator(".button.button-save");
    }
}

export default NewMembpage;

