const { expect } = require("@playwright/test");

class LoginPage{
    constructor(page){
        this.page = page;
        this.username = page.getByPlaceholder("email@example.com");
        this.passrd = page.getByPlaceholder("enter your passsword");
        this.loginButton = page.locator("[value='Login']");
        this.errorMessage = page.locator("#toast-container");
    }


    async navigateTo(){
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
        await this.page.waitForLoadState('networkidle');
    }

    async enterCredentials(username, password) {
        await this.username.fill(username);
        await this.passrd.fill(password);
        await this.loginButton.click();
    
        await this.page.waitForLoadState('networkidle');
    }

    async verifyIncorrectLogin() {
        expect(await this.errorMessage.textContent()).toHaveText("Incorrect email or password");
        console.log("Error message validated");
    }

}

module.exports = {LoginPage};