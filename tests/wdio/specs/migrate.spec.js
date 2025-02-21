const Page = require('../pageobjects/migrate.page')
const Data = require('../data/migrate')
const asserts = require('../vaah-webdriverio/Assert')

let params = Data.params;
let inputs;

//-----------------------------------------Group: 1-----------------------------------------

params.group = Data.groups[0];
describe(Page.groupId(params), () => {

    params.test = Data.groups[0].tests[0];
    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[0];
        await Page.open();
        await asserts.pageUrl(inputs.assert);
    })

    params.test = Data.groups[0].tests[1];
    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[1];
        await Page.open();
        await asserts.pageTitle(inputs.assert);
    })

    params.test = Data.groups[0].tests[2];
    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[2];
        await Page.open();
        await Page.envFileVisibility(Data);
    })

    params.test = Data.groups[0].tests[3];
    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[3];
        await Page.open();
        await Page.migrationMessageVisibility(Data, inputs.assert);
    })

    params.test = Data.groups[0].tests[4];
    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[4];
        await Page.open();
        await Page.migrateButtonAvailability(Data);
    })

    params.test = Data.groups[0].tests[5];
    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[5];
        await Page.open();
        await Page.backButtonAvailability(Data);
    })

    params.test = Data.groups[0].tests[6];
    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[6];
        await Page.open();
        await Page.saveButtonAvailability(Data);
    })

    params.test = Data.groups[0].tests[7];
    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[7];
        await Page.open();
        await Page.migrateButtonColorChange(Data, inputs.assert);
    })
})

//-----------------------------------------Group: 2-----------------------------------------

params.group = Data.groups[1];
describe(Page.groupId(params), () => {

    params.test = Data.groups[1].tests[0];
    it(Page.testId(params), async () => {
        inputs = Data.groups[1].tests[0];
        await Page.open();
        await Page.messageCloseButtonFunctionality(Data, inputs.assert);
    })

    params.test = Data.groups[1].tests[1];
    it(Page.testId(params), async () => {
        inputs = Data.groups[1].tests[1];
        await Page.open();
        await Page.migrationButtonFunctionality(Data);
    })

    params.test = Data.groups[1].tests[2];
    it(Page.testId(params), async () => {
        inputs = Data.groups[1].tests[2];
        await Page.open();
        await Page.migrationConfirmationMessage(Data, inputs.assert);
    })

    params.test = Data.groups[1].tests[3];
    it(Page.testId(params), async () => {
        inputs = Data.groups[1].tests[3];
        await Page.open();
        await Page.migrationWindowCloseButton(Data);
    })

    params.test = Data.groups[1].tests[4];
    it(Page.testId(params), async () => {
        inputs = Data.groups[1].tests[4];
        await Page.open();
        await Page.cancelButtonFunctionality(Data);
    })

    params.test = Data.groups[1].tests[5];
    it(Page.testId(params), async () => {
        inputs = Data.groups[1].tests[5];
        await Page.open();
        await Page.proceedButtonFunctionality(Data, inputs.assert);
    })

    params.test = Data.groups[1].tests[6];
    it(Page.testId(params), async () => {
        inputs = Data.groups[1].tests[6];
        await Page.open();
        await Page.backButtonFunctionality(Data, inputs.assert);
    })

    params.test = Data.groups[1].tests[7];
    it(Page.testId(params), async () => {
        inputs = Data.groups[1].tests[7];
        await Page.open();
        await Page.saveButtonFunctionality(Data, inputs.assert);
    })
})
