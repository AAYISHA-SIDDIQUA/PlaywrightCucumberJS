const {Given, When, Then} = require("@cucumber/cucumber");
const {expect} = require("@playwright/test");
const playwright = require("playwright");

Given('a user logs into client App with {string} and {string}', {timeout: 100 * 1000},async function(username, password) {
    this.loginPage = this.poManager.getLoginPage();
    await this.loginPage.navigateTo();
    await this.loginPage.enterCredentials(username, password);
    
});

Then('the error message should be displayed', async function() {
    await this.loginPage.verifyIncorrectLogin();
});
