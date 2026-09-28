exports.LoginPage =


class LoginPage
{
    constructor(page)
    {
    this.page =page;
    this.userNameInput="#user-name",
    this.passwordInput="#password",
    this.loginButton = "#login-button"

    }
    async goToLoginPage()
    {
        await this.page.goto("https:www.saucedemo.com/");
    }

    async login(username,password)
    {
        await this.page.locator(this.userNameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
    }
}

