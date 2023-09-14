import { expect } from '@wdio/globals'
import { Key } from 'webdriverio'
let github = `https://github.com/`
//Final test
describe("First test-case: Registration", () => {
    it ("Part one: click Sign up", async () => {
        await browser.url(github)

        const signUp = await $('/html/body/div[1]/div[1]/header/div/div[2]/div/div/a')
        await signUp.click()
        console.log("SignUp click check!");
        await browser.pause(5000)
    });
    it ("Part two: text containing", async () => {
        const isTextHere = await $('/html/body/div[1]/div[4]/main/div[2]/text-suggester/div[1]/typing-effect/span[1]')
        await expect(isTextHere).toHaveTextContaining(["Welcome to GitHub!", "Let", "s begin the adventure"])
        console.log("Containig text check!");
        await browser.pause(2000)
    });
    it ("Part three: email", async () => {
        const email = await $('#email')
        await email.click()
        await email.setValue('jdajkas11asshjk@jkahdsjkahsd.comm')
        await browser.pause(1000)
        let emailButton = await $('#email-container .signup-continue-button')
        await browser.pause(1000)
        await emailButton.click()
        await browser.pause(2000)
        console.log('Email check!')
    });
    it ("Part four: password", async () => {
        const password = await $('#password-container #password')
        await password.click()
        await password.setValue('saSAsdsa@!#!132')
        await browser.pause(1000)
        let passwordButton = await $('#password-container .signup-continue-button')
        await browser.pause(1000)
        await passwordButton.click()
        await browser.pause(2000)
        console.log('Password check!')
    });
    it ("Part five: nickname", async () => {
        const login = await $('#login')
        await login.click()
        await login.setValue('ThisIsSick22nes')
        await browser.pause(1000)
        let loginButton = await $('#username-container .signup-continue-button')
        await browser.pause(1000)
        await loginButton.click()
        await browser.pause(2000)
        console.log('Nickname check!')
    });
    it ("Part six: opt_in (y/n)", async () => {
        const opt_in = await $('#opt_in')
        await opt_in.click()
        await opt_in.setValue('y')
        await browser.pause(1000)
        let opt_inButton = await $('#opt-in-container .signup-continue-button')
        await browser.pause(1000)
        await opt_inButton.click()
        await browser.pause(2000)
        console.log("First test-case Complete!");
    });
});
describe("Second test-case: Pick trial plan", () => {
    it ("Part one: scroll and isExisting text", async () => {
        await browser.url(github)

        const header_near_footer = await $('/html/body/div[1]/div[4]/main/div[4]/div[1]/div/div/div/h2')
        await header_near_footer.scrollIntoView()
        await expect(header_near_footer).toHaveText('The place for anyone from anywhere to build anything')
        await header_near_footer.isExisting()
        console.log("IsExisting check!");
        await browser.pause(2000)
    });
    it ("Part two: isDisplayed link", async () => {
        const start_trial = await $('/html/body/div[1]/div[4]/main/div[4]/div[1]/div/div/div/div/div/a[2]')
        await start_trial.isDisplayed()
        await start_trial.click()
        console.log("IsVisible link check!");
        await browser.pause(2000)
    });
    it ("Part three: check header and click", async () => {
        const trial_plan_header = await $('/html/body/div[1]/div[4]/main/div/div[1]/h1')
        await trial_plan_header.isExisting()
        const enterprise_cloud = await $('.container-xl .pricing-recommended-plan')
        await enterprise_cloud.click()
        console.log("Header and click check!");
        await browser.pause(2000)
    });
});
describe("Third test-case: Subscribe", () => {
    it ("Part one: Scroll to sub button", async () => {
        await browser.url(github)

        const subscribe_button = await $('/html/body/div[1]/footer/div[1]/div/div[1]/div/a')
        await subscribe_button.scrollIntoView()
        await subscribe_button.isExisting()
        await subscribe_button.isClickable()
        await subscribe_button.click()
        console.log('Button is alive!');
        await browser.pause(2000)
    });
    it ("Part two: new url and header isExisting", async () => {
        await browser.getUrl()
        let subscribe_header = await $('//*[@id="hero-section-brand-heading"]')
        await subscribe_header.isExisting()
        console.log('New url and header check!');
        await browser.pause(2000)
    });
    it ("Part three: set email and country", async () => {
        const work_email = await $('//*[@id=":R8d7m:"]')
        await work_email.setValue('asdada@dsadadada.asdsada')
        const country = await $('//*[@id="country"]')
        const value = await country.getValue()
        await country.selectByAttribute('value', 'UA')
        console.log("Email and country check!");
        await browser.pause(2000)
    });
    it ("Part four: check box", async () => {
        const check_box = await $('#gated-agree-marketingEmailOptin1')
        await check_box.click()
        console.log("Check box is check!");
        await browser.pause(2000)
    });
    it ("Part five: Subscribe button click", async () => {
        const subscribe_button_agree = await $('//*[@id="form"]/form/div/button')
        await subscribe_button_agree.click()
        console.log("Subscribe button agree check!");
        await browser.pause(2000)
    });
    it ("Part six: Thanks to have text", async () => {
        const thanks_for_subscibing = $('//*[@id="hero-section-brand-heading"]')
        await expect(thanks_for_subscibing).toHaveText("Thanks for subscribing!")
        console.log("To have text check!");
        await browser.pause(2000)
    });
});
describe("Fourth test-case: Searching", () => {
    it ("Part one: click on Search", async () => {
        await browser.url(github)
        const search = await $('/html/body/div[1]/div[1]/header/div/div[2]/div/div/qbsearch-input/div[1]/button')
        await search.click()
        const search_field = await $('#query-builder-test')
        await search_field.setValue('Waiting')
        await browser.pause(1000)
        await browser.keys(Key.Enter)
        console.log("Search engine check!");
        await browser.pause(2000)
    });
    it ("Part two: word in href results", async () => {
        const search_field_check = await $('.flex-1')
        const get_text = await search_field_check.getText()
        const results_array = await $$('.Box-sc-g0xbh4-0 .kXssRI')[0]
        await expect(results_array.$$('.fIqerb')[1]).toHaveHrefContaining(get_text)
        console.log("Word in results check!");
        await browser.pause(2000)
    });
});
describe("Fifth test-case: Features", () => {
    it ("Part one: click Pricing", async () => {
        await browser.url(github)
        const pricing_button = await $('/html/body/div[1]/div[1]/header/div/div[2]/div/nav/ul/li[4]/a')
        await pricing_button.click()
        console.log("Pricing button clicked")
        await browser.pause(2000)
    });
    it ("Part two: Header isDisplayed", async () => {
        const visible_header = await $('.h2-mktg')
        await visible_header.isDisplayed()
        console.log("Header is displayed!")
        await browser.pause(2000)
    });
    it ("Part three: Scroll to features", async () => {    
        const features = await $('/html/body/div[1]/div[4]/main/div[2]/div[2]/div[3]/a')
        await features.scrollIntoView()
        await features.click()
        console.log("Scroll to features and clicked!")
        await browser.pause(2000)
    });
    it ("Part four: Scroll to features", async () => {    
        const compare_features = await $('/html/body/div[1]/div[4]/main/div[4]/h1')
        await compare_features.isExisting()
        console.log("Check features header!")
        await browser.pause(2000)
    });
});