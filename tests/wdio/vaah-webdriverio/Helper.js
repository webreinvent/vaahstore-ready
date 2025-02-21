const Sl = require("../vaah-webdriverio/Selector");

class Helper{

    async waitExist(element, timeout_pause=null, interval_pause=null){
        await element.waitForExist({timeout: timeout_pause, interval: interval_pause});
    }

    async waitDisplayed(element, timeout_pause=null, interval_pause=null){
        await element.waitForDisplayed({timeout: timeout_pause, interval: interval_pause});
    }

    async VueClear(testid) {
        await Sl.testid(testid).click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');
    }
}

module.exports = new Helper();
