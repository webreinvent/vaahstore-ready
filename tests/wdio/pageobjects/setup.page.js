const Page = require('../vaah-webdriverio/Page');
const Sl = require('../vaah-webdriverio/Selector');
const asserts = require('../vaah-webdriverio/Assert');

class SetupPage extends Page{
    constructor() {
        super();
        this.params.page.id = "SP";
        this.params.page.name = "Setup";
        this.params.page.path = "/backend#/setup";
        this.params.page.url = this.base_url+this.params.page.path;

    }

    async pause(is_human){
        if(is_human)
            await browser.pause(this.is_human_pause);
    }

    async open()
    {
        await this.pause(this.is_human);
        await browser.maximizeWindow();
        await super.open(this.params.page.url);
    }

    async installButtonAssert(data){
        await expect(Sl.testid(data.element.install_button_testid)).toExist();
    }

    async clickButton(data){
        await expect(Sl.testid(data.element.install_button_testid).click());
    }

    async installButtonNavigation(data, assert){

        await this.clickButton(data);
        await this.pause(this.is_human);
        await asserts.pageUrl(assert);
    }
}

module.exports = new SetupPage()
