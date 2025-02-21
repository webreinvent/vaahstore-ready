const Page = require('../pageobjects/configuration.page')
const Data = require('../data/configuration')
const asserts = require('../vaah-webdriverio/Assert')

let params = Data.params;
let inputs;
Page.getEnvFile();

//---------------------------Group: 1---------------------------

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
        await Page.assertTestDatabaseButton(Data, inputs.assert);
    })

    params.test = Data.groups[0].tests[3];
    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[3];
        await Page.open();
        await Page.assertTestMailButton(Data, inputs.assert);
    })

    params.test = Data.groups[0].tests[4];
    it(Page.testId(params), async () => {
        inputs = Data.groups[0].tests[4];
        await Page.open();
        await Page.assertTestSaveButton(Data, inputs.assert);
    })
})

//---------------------------Group : 2---------------------------

params.group = Data.groups[1];
describe(Page.groupId(params), () => {

    params.test = Data.groups[1].tests[0];
    it(Page.testId(params), async () => {
        inputs = Data.groups[1].tests[0];
        await Page.open();
        await Page.invalidDatabaseHost(Data, inputs.assert);
    })

    params.test = Data.groups[1].tests[1];
    it(Page.testId(params), async () => {
        inputs = Data.groups[1].tests[1];
        await Page.open();
        await Page.blankDatabaseHost(Data, inputs.assert);
    })

    params.test = Data.groups[1].tests[2];
    it(Page.testId(params), async () => {
        inputs = Data.groups[1].tests[2];
        await Page.open();
        await Page.blankDatabasePort(Data, inputs.assert);
    })

    params.test = Data.groups[1].tests[3];
    it(Page.testId(params), async () => {
        inputs = Data.groups[1].tests[3];
        await Page.open();
        await Page.invalidDatabasePort(Data, inputs.assert);
    })

    params.test = Data.groups[1].tests[4];
    it(Page.testId(params), async () => {
        inputs = Data.groups[1].tests[4];
        await Page.open();
        await Page.blankDatabaseName(Data, inputs.assert);
    })

    params.test = Data.groups[1].tests[5];
    it(Page.testId(params), async () => {
        inputs = Data.groups[1].tests[5];
        await Page.open();
        await Page.invalidDatabaseName(Data, inputs.assert);
    })

    params.test = Data.groups[1].tests[6];
    it(Page.testId(params), async () => {
        inputs = Data.groups[1].tests[6];
        await Page.open();
        await Page.blankDatabaseUsername(Data, inputs.assert);
    })

    params.test = Data.groups[1].tests[7];
    it(Page.testId(params), async () => {
        inputs = Data.groups[1].tests[7];
        await Page.open();
        await Page.invalidDatabaseUsername(Data, inputs.assert);
    })

})

//---------------------------Group: 3---------------------------

params.group = Data.groups[2];
describe(Page.groupId(params), () => {

    params.test = Data.groups[2].tests[0];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[0];
        await Page.open();
        await Page.databaseButtonBlankTest(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[1];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[1];
        await Page.open();
        await Page.databaseButtonValidTest(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[2];
    it(Page.testId(params), async () => {
        await Page.open();
        await Page.testMailButtonFunctionality(Data);
    })

    params.test = Data.groups[2].tests[3];
    it(Page.testId(params), async () => {
        await Page.open();
        await Page.mailUsernameCloseButton(Data);
    })

    params.test = Data.groups[2].tests[4];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[4];
        await Page.open();
        await Page.envDropdownTest(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[5];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[5];
        await Page.open();
        await Page.debugDropdownTest(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[6];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[6];
        await Page.open();
        await Page.timezoneDropdownTest(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[7];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[7];
        await Page.open();
        await Page.databaseTypeDropdownTest(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[8];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[8];
        await Page.open();
        await Page.mailProviderDropdownTest(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[9];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[9];
        await Page.open();
        await Page.mailEncryptionDropdownText(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[10];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[10];
        await Page.open();
        await Page.customTextbox(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[11];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[11];
        await Page.open();
        await Page.customeTextboxFunctionality(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[12];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[12];
        await Page.open();
        await Page.mysqlDatabaseTest(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[13];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[13];
        await Page.open();
        await Page.postgresqlDatabaseTest(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[14];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[14];
        await Page.open();
        await Page.sqliteDatabaseTest(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[15];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[15];
        await Page.open();
        await Page.sqlServerDatabaseTest(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[16];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[16];
        await Page.open();
        await Page.databasePasswordEyeIconFunctionality(Data, inputs.assert);
    })

    params.test = Data.groups[2].tests[17];
    it(Page.testId(params), async () => {
        inputs = Data.groups[2].tests[17];
        await Page.open();
        await Page.mailPasswordEyeIconFunctionality(Data, inputs.assert);
    })
})

//---------------------------Group: 4---------------------------

params.group = Data.groups[3];
describe(Page.groupId(params), () => {

    params.test = Data.groups[3].tests[0];
    it(Page.testId(params), async () => {
        inputs = Data.groups[3].tests[0];

        await Page.open();
        await Page.mailDriverPlaceholder(Data, inputs.assert);
    })

    params.test = Data.groups[3].tests[1];
    it(Page.testId(params), async () => {
        inputs = Data.groups[3].tests[1];
        await Page.open();
        await Page.mailDriverTypeFunctionality(Data, inputs.assert);
    })

    params.test = Data.groups[3].tests[2];
    it(Page.testId(params), async () => {
        inputs = Data.groups[3].tests[2];
        await Page.open();
        await Page.mailHostPlaceholder(Data, inputs.assert);
    })

    params.test = Data.groups[3].tests[3];
    it(Page.testId(params), async () => {
        inputs = Data.groups[3].tests[3];
        await Page.open();
        await Page.mailHostTypeFunctionality(Data, inputs.assert);
    })

    params.test = Data.groups[3].tests[4];
    it(Page.testId(params), async () => {
        inputs = Data.groups[3].tests[4];
        await Page.open();
        await Page.mailPortPlaceholder(Data, inputs.assert);
    })

    params.test = Data.groups[3].tests[5];
    it(Page.testId(params), async () => {
        inputs = Data.groups[3].tests[5];
        await Page.open();
        await Page.mailPortTypeFunctionality(Data, inputs.assert);
    })

    params.test = Data.groups[3].tests[6];
    it(Page.testId(params), async () => {
        inputs = Data.groups[3].tests[6];
        await Page.open();
        await Page.mailUsernamePlaceholder(Data, inputs.assert);
    })

    params.test = Data.groups[3].tests[7];
    it(Page.testId(params), async () => {
        inputs = Data.groups[3].tests[7];
        await Page.open();
        await Page.mailUsernameTypeFunctionality(Data, inputs.assert);
    })

    params.test = Data.groups[3].tests[8];
    it(Page.testId(params), async () => {
        inputs = Data.groups[3].tests[8];
        await Page.open();
        await Page.mailPasswordPlaceholder(Data, inputs.assert);
    })

    params.test = Data.groups[3].tests[9];
    it(Page.testId(params), async () => {
        inputs = Data.groups[3].tests[9];
        await Page.open();
        await Page.mailPasswordTypeFunctionality(Data, inputs.assert);
    })

    params.test = Data.groups[3].tests[10];
    it(Page.testId(params), async () => {
        inputs = Data.groups[3].tests[10];
        await Page.open();
        await Page.mailPasswordHidden(Data, inputs.assert);
    })

    params.test = Data.groups[3].tests[11];
    it(Page.testId(params), async () => {
        inputs = Data.groups[3].tests[11];
        await Page.open();
        await Page.fromNamePlaceholder(Data, inputs.assert);
    })

    params.test = Data.groups[3].tests[12];
    it(Page.testId(params), async () => {
        inputs = Data.groups[3].tests[12];
        await Page.open();
        await Page.fromNameTypeFunctionality(Data, inputs.assert);
    })

    params.test = Data.groups[3].tests[13];
    it(Page.testId(params), async () => {
        inputs = Data.groups[3].tests[13];
        await Page.open();
        await Page.fromEmailPlaceholder(Data, inputs.assert);
    })

    params.test = Data.groups[3].tests[14];
    it(Page.testId(params), async () => {
        inputs = Data.groups[3].tests[14];
        await Page.open();
        await Page.fromEmailTypeFunctionality(Data, inputs.assert);
    })
})

//---------------------------Group: 5---------------------------

params.group = Data.groups[4];
describe(Page.groupId(params), () => {

    params.test = Data.groups[4];
    params.test = Data.groups[4].tests[0];
    it(Page.testId(params), async () => {
        inputs = Data.groups[4].tests[0];
        await Page.open();
        await Page.blankSendMailButtonResponse(Data, inputs.assert);
    })

    params.test = Data.groups[4].tests[1];
    it(Page.testId(params), async () => {
        inputs = Data.groups[4].tests[1];
        await Page.open();
        await Page.blankMailDriverTest(Data, inputs.assert);
    })

    params.test = Data.groups[4].tests[2];
    it(Page.testId(params), async () => {
        inputs = Data.groups[4].tests[2];
        await Page.open();
        await Page.invalidMailDriver(Data, inputs.assert);
    })

    params.test = Data.groups[4].tests[3];
    it(Page.testId(params), async () => {
        inputs = Data.groups[4].tests[3];
        await Page.open();
        await Page.blankMailHost(Data, inputs.assert);
    })

    params.test = Data.groups[4].tests[4];
    it(Page.testId(params), async () => {
        inputs = Data.groups[4].tests[4];
        await Page.open();
        await Page.invalidMailHost(Data, inputs.assert);
    })

    params.test = Data.groups[4].tests[5];
    it(Page.testId(params), async () => {
        inputs = Data.groups[4].tests[5];
        await Page.open();
        await Page.blankMailPort(Data, inputs.assert);
    })

    params.test = Data.groups[4].tests[6];
    it(Page.testId(params), async () => {
        inputs = Data.groups[4].tests[6];
        await Page.open();
        await Page.invalidMailPort(Data, inputs.assert);
    })

    params.test = Data.groups[4].tests[7];
    it(Page.testId(params), async () => {
        inputs = Data.groups[4].tests[7];
        await Page.open();
        await Page.blankMailUsername(Data, inputs.assert);
    })

    params.test = Data.groups[4].tests[8];
    it(Page.testId(params), async () => {
        inputs = Data.groups[4].tests[8];
        await Page.open();
        await Page.invalidMailUsername(Data, inputs.assert);
    })

    params.test = Data.groups[4].tests[9];
    it(Page.testId(params), async () => {
        inputs = Data.groups[4].tests[9];
        await Page.open();
        await Page.blankMailPassword(Data, inputs.assert);
    })

    params.test = Data.groups[4].tests[10];
    it(Page.testId(params), async () => {
        inputs = Data.groups[4].tests[10];
        await Page.open();
        await Page.invalidMailPassword(Data, inputs.assert);
    })

    params.test = Data.groups[4].tests[11];
    it(Page.testId(params), async () => {
        inputs = Data.groups[4].tests[11];
        await Page.open();
        await Page.blankFromName(Data, inputs.assert);
    })

    params.test = Data.groups[4].tests[12];
    it(Page.testId(params), async () => {
        inputs = Data.groups[4].tests[12];
        await Page.open();
        await Page.blankFromEmail(Data, inputs.assert);
    })

    params.test = Data.groups[4].tests[13];
    it(Page.testId(params), async () => {
        inputs = Data.groups[4].tests[13];
        await Page.open();
        await Page.invalidFromEmail(Data, inputs.assert);
    })

    params.test = Data.groups[4].tests[14];
    it(Page.testId(params), async () => {
        inputs = Data.groups[4].tests[14];
        await Page.open();
        await Page.invalidDialogMailUsername(Data, inputs.assert);
    })

    params.test = Data.groups[4].tests[15];
    it(Page.testId(params), async () => {
        inputs = Data.groups[4].tests[15];
        await Page.open();
        await Page.validSendMailButtonResponse(Data, inputs.assert);
    })
})

//---------------------------Group: 6---------------------------

params.group = Data.groups[5];
describe(Page.groupId(params), () => {

    params.test = Data.groups[5].tests[0];
    it(Page.testId(params), async () => {
        inputs = Data.groups[5].tests[0];
        await Page.open();
        await Page.blankDataResponse(Data, inputs.assert);
    })

    params.test = Data.groups[5].tests[1];
    it(Page.testId(params), async () => {
        inputs = Data.groups[5].tests[1];
        await Page.open();
        await Page.blankAppNameResponse(Data, inputs.assert);
    })

    params.test = Data.groups[5].tests[2];
    it(Page.testId(params), async () => {
        inputs = Data.groups[5].tests[2];
        await Page.open();
        await Page.validDataResponse(Data, inputs.assert);
    })

    // params.test = Data.groups[5].tests[3];
    // it(Page.testId(params), async () => {
    //     inputs = Data.groups[5].tests[3];
    //     await Page.open();
    //     await Page.customOptionPageResponse(Data, inputs.assert);
    // })

    // params.test = Data.groups[5].tests[4];
    // it(Page.testId(params), async () => {
    //     inputs = Data.groups[5].tests[4];
    //     await Page.open();
    //     await Page.developOptionPageResponse(Data, inputs.assert);
    // })

    // params.test = Data.groups[5].tests[5];
    // it(Page.testId(params), async () => {
    //     inputs = Data.groups[5].tests[5];
    //     await Page.open();
    //     await Page.stagingOptionPageResponse(Data, inputs.assert);
    // })

    // params.test = Data.groups[5].tests[6];
    // it(Page.testId(params), async () => {
    //     inputs = Data.groups[5].tests[6];
    //     await Page.open();
    //     await Page.productionOptionPageResponse(Data, inputs.assert);
    // })

    // params.test = Data.groups[5].tests[7];
    // it(Page.testId(params), async () => {
    //     inputs = Data.groups[5].tests[7];
    //     await Page.open();
    //     await Page.wdiojsOptionPageResponse(Data, inputs.assert);
    // })
})
