const {expect} = require("@playwright/test");
const playwright = require("playwright");
const {Before, After, AfterStep, Status} = require("@cucumber/cucumber");
const {POManager} = require("../../pageObjects/POManager");


//We can also add tagged hooks like Before({tags: "Validation"}, async funtion()) --> this will only run before @Validation tagged features or scenarios

Before(async function() {
    const browser = await playwright.chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    this.page = await context.newPage();

    // By assigning this. before poManager -- this is called world constructor. It will be accessible outside this block as well.
    this.poManager = new POManager(this.page, expect);
});

AfterStep(async function({result}) {
    if(result.status === Status.FAILED) {
        await this.page.screenshot({path: "screenshot/failure.png"});
    }
});


After(async function() {
    console.log("Execution completed");
});