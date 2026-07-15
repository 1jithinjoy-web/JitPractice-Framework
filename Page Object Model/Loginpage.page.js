class LoginPage
{
    constructor(page)
    {
        this.UsernameTF=page.locator("//input[@id='username']")
        this.PasswordTF=page.locator("//input[@id='password']")
        this.Loginbtn=page.locator("//input[@class='button']")
    }
}
export default LoginPage 