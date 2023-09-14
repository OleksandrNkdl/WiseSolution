import { expect } from '@wdio/globals'

describe("Webdriverio main page", () => {

    xit("should have correct title", async () => {
        await browser.url('https://webdriver.io/');

        const title = await browser.getTitle()
        console.log(title);

        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
    });

    xit("should show addValue command", async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);

        let input = await $("#username")
        await input.addValue("hello")
        await browser.pause(2000)
    
        await input.addValue(123)
        await browser.pause(2000)
    
        await expect(input).toHaveValue("hello123")
    });

    xit("should show setValue command", async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);

        let input = await $("#username")
        await input.setValue("world")
        await browser.pause(2000)

        console.log(await input.getValue())
        await expect(input).toHaveValue("world")
    });

    xit("should show click command", async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`);

        let loginButton = await $(".radius")
        await browser.pause(2000)
        await loginButton.click()
        await browser.pause(4000)

        let inputUsername = await $("#username")
        await inputUsername.addValue("tomsmith")
        await browser.pause(2000)

        let inputPassword = await $("#password")
        await inputPassword.addValue("SuperSecretPassword")
        await browser.pause(2000)

        await loginButton.click()
        await browser.pause(2000)

    });

    xit("should show getAttribute command", async () => {
        await browser.url(`https://dou.ua/search`);

        let inputSearch = await $('#gsc-i-id1')
        let attr = await inputSearch.getAttribute("aria-label")
        console.log("Plasceholder attribute is: " + attr)

        await inputSearch.setValue("Cat")
        attr = await inputSearch.getValue()
        await browser.pause(2000)
        console.log("Value attribute is: " + attr);
    });
    
    xit("should show getLocation command", async () => {
        await browser.url(`https://dou.ua`);

        let inputSearch = await $('#txtGlobalSearch')
        let location = await inputSearch.getLocation()
        console.log("Location is: " + location);
    });

    xit("should show getText command", async () => {
        await browser.url(`https://webdriver.io`);

        let subtitle = await $(".hero__subtitle")
        console.log("Subtitle text: " + await subtitle.getText());
    });
});
describe("Homework_1 main page", () => {
    xit("API button", async () => {
        await browser.url(`https://webdriver.io/`);

        const apiButton = await $('//*[@id="__docusaurus"]/nav/div[1]/div[1]/a[3]')
        console.log("API is:" + apiButton);
        browser.pause(2000)

        await apiButton.click()
        browser.pause(2000)
    });  
    xit("Check API URL", async () => {  
        const targetUrl = `https://webdriver.io/docs/api`
        const getCurrentUrl = await browser.getUrl()
        await expect(targetUrl).getCurrentUrl
        console.log("URL is: " + getCurrentUrl);
        browser.pause(2000)
    });     
    xit("h1 contains Introduction", async () => {   
        const h1 = await $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[1]/div/article/div[2]/header/h1')
        await expect(h1).toHaveTextContaining("Introduction")
        console.log("H1 is Introducion: " + h1);
        browser.pause(2000)
    });      
    xit("Webdriver link = url", async () => {  
        const webDriver = await $('//*[@id="docusaurus_skipToContent_fallback"]/div/main/div/div/div[1]/div/article/div[2]/p[1]/a[1]')
        const webDriverLink = await webDriver.getUrl()
        await expect(webDriver).toHaveUrl(webDriverLink)
        console.log("WebDriver link have URL: " + webDriverLink);
        browser.pause(2000)
    });      
    xit("Search field", async () => {    
        const searchLink = await $('.DocSearch-Button-Placeholder')
        await searchLink.click()
        const searchField = await $('.DocSearch-Input')
        await searchField.setValue('all is done')
        browser.pause(2000)
        await searchField.setValue('')
        console.log('All is done');
    });      
});
describe("Webdriverio_2 main page", () => {
    xit("Should show if an an element is clickable", async () => {
        await browser.url(`https://webdriver.io`);

        const blogButton = await $('.button[href="/docs/gettingstarted"]')
        let clickable = await blogButton.isClickable()
        console.log("Is clickable: " + clickable);
    });

    xit("Should show if an an element is displayed", async () => {
        await browser.url(`https://webdriver.io`);

        const blogButton = await $('.button[href="/docs/gettingstarted"]')
        let displayed = await blogButton.isDisplayed()
        console.log("Is displayed: " + displayed);
    });
    xit("Should show if an an element is visible", async () => {
        await browser.url(`https://webdriver.io`);

        const blogButton = await $('.button[href="/docs/gettingstarted"]')
        let displayedInViewport = await blogButton.isDisplayedInViewport()
        console.log("Is blog button displayed in viewport: " + displayedInViewport);

        const footer = await $('.footer__link-item[href="/docs/gettingstarted"]')
        let footerDisplayedInViewport = await footer.isDisplayedInViewport()
        console.log("Is blog button in footer displayed in viewport: " + footerDisplayedInViewport);
    });
    it("Should show if an element is enabled", async () => {
        await browser.url(`https://webdriver.io`);
        const getStartedButton = await $('.button[href="/docs/gettingstarted"]')
        let isEnabled = await getStartedButton.isEnabled()
        console.log("Is get started button enabled: " + isEnabled);
    });
});
