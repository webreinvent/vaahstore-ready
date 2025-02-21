const Page = require('../vaah-webdriverio/Page');
const Sl = require('../vaah-webdriverio/Selector');
const asserts = require('../vaah-webdriverio/Assert');
const helper = require('../vaah-webdriverio/Helper');

class MigratePage extends Page{
    constructor() {
        super();
        this.params.page.id = "MG";
        this.params.page.name = "Migrate";
        this.params.page.path = "/backend#/setup/install/migrate";
        this.params.page.url = this.base_url+this.params.page.path;
    }

    async open()
    {
        await browser.maximizeWindow();
        await asserts.pause();
        await super.open(this.params.page.url);
    }

    async envFileVisibility(data){
        await asserts.pause();
        await expect(Sl.testid(data.element.env_file_testid)).toExist();
    }

    async migrationMessageVisibility(data, assert){
        await asserts.pause();
        await expect(Sl.testid(data.element.migration_message_testid)).toHaveTextContaining(assert);
    }

    async migrateButtonAvailability(data){
        await asserts.pause();
        await expect(Sl.testid(data.element.migration_btn_testid)).toExist();
    }

    async backButtonAvailability(data){
        await asserts.pause();
        await expect(Sl.testid(data.element.back_btn_testid)).toExist();
    }

    async saveButtonAvailability(data){
        await asserts.pause();
        await expect(Sl.testid(data.element.save_btn_testid)).toExist();
    }

    async migrateButtonColorChange(data, assert){
        await asserts.pause();
        await helper.waitDisplayed(Sl.testid(data.element.env_file_testid), this.long_pause, this.small_pause);
        await Sl.testid(data.element.migration_btn_testid).click();
        await Sl.testid(data.element.proceed_btn_testid).click();
        await helper.waitExist(Sl.class(data.element.validation_message_class), this.long_pause);
        await expect(Sl.testid(data.element.migration_btn_testid)).toHaveAttributeContaining(assert.attribute, assert.value);
    }

    async messageCloseButtonFunctionality(data, assert){
        await Sl.testid(data.element.close_btn_testid).click();
        await asserts.pause();
        await expect(Sl.role(data.element.migration_message_role)).toHaveAttribute(assert.attribute, assert.value);
    }

    async migrationButtonFunctionality(data){
        await Sl.testid(data.element.migration_btn_testid).click();
        await asserts.pause();
        await expect(Sl.testid(data.element.migration_confirmation_message_testid)).toExist();
    }

    async migrationConfirmationMessage(data, assert){
        await Sl.testid(data.element.migration_btn_testid).click();
        await asserts.pause();
        await expect(Sl.testid(data.element.migration_confirmation_message_testid)).toHaveTextContaining(assert)
    }

    async migrationWindowCloseButton(data){
        await Sl.testid(data.element.migration_btn_testid).click();
        await Sl.testid(data.element.migration_close_btn_testid).click();
        await asserts.pause();
        await expect(Sl.testid(data.element.migration_confirmation_message_testid)).not.toExist();
    }

    async cancelButtonFunctionality(data){
        await Sl.testid(data.element.migration_btn_testid).click();
        await Sl.testid(data.element.cancel_btn_testid).click();
        await asserts.pause();
        await expect(Sl.testid(data.element.migration_confirmation_message_testid)).not.toExist();
    }

    async proceedButtonFunctionality(data, assert){
        await helper.waitDisplayed(Sl.testid(data.element.env_file_testid), this.long_pause, this.small_pause)
        await Sl.testid(data.element.migration_btn_testid).click();
        await asserts.pause();
        await Sl.testid(data.element.proceed_btn_testid).click();
        const message = Sl.class(data.element.validation_message_class);
        await helper.waitExist(message, this.long_pause);
        await expect(message).toHaveTextContaining(assert);
    }

    async backButtonFunctionality(data, assert){
        await Sl.testid(data.element.back_btn_testid).click();
        await asserts.pause();
        await asserts.pageUrl(assert);
    }

    async saveButtonFunctionality(data, assert){
        await helper.waitDisplayed(Sl.testid(data.element.env_file_testid), this.long_pause, this.small_pause);
        await Sl.testid(data.element.migration_btn_testid).click();
        await asserts.pause();
        await Sl.testid(data.element.proceed_btn_testid).click();
        await helper.waitExist(Sl.class(data.element.validation_message_class), this.long_pause);
        await Sl.testid(data.element.save_btn_testid).click();
        await asserts.pause();
        await asserts.pageUrl(assert);
    }
}

module.exports = new MigratePage();
