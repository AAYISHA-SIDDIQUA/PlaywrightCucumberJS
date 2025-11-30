const {Given, When, Then} = require("@cucumber/cucumber");
const {expect} = require("@playwright/test");
const playwright = require("playwright");

Given('a user logins to Client Application with {string} and {string}', {timeout: 100 * 1000}, async function (username, password) {

    const loginPage = this.poManager.getLoginPage();
    await loginPage.navigateTo();
    await loginPage.enterCredentials(username, password);

  });

When('a user add the {string} product to the cart', async function(productName) {
    this.productPage = this.poManager.getProductPage();
    await this.productPage.addProducts(productName);
});

Then('the product {string} should be visible on the cart page', async function(productName) {
    this.cartPage = this.poManager.getCartPage();
    await this.cartPage.checkoutProducts(productName);
});

When('the user enters all valid details and submits the Order', async function() {
    this.submitOrderPage = this.poManager.getSubmitOrderPage();
    await this.submitOrderPage.submitOrder();
    orderID = await this.submitOrderPage.fetchOrderID();
    console.log(orderID);
});

Then('the order id should be displayed in the Orders section', async function() {
    this.ordersPage = this.poManager.getOrdersPage();
    await this.ordersPage.viewOrderDetails(orderID);
});