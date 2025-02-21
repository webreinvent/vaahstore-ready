# vaah-webdriverio
Helpful classes to reduce code &amp; accelerate speed for writing test cases for WebDriver.io 

## Objectives
- Reduce code for `selecting` elements and verifying `asserts`
- Generate unique `page id`, `group id` and `test case id`
- Run `test cases` based on `page id`, `group id` or `test id`
- Generate a well `formated` report

## Setup
##### Step 1: Clone or add as this repo as submodule to root of `webdriverio` tests folder with folder name `vaah-webdriverio`
Demo: https://img-v3.getdemo.dev/screenshot/spjG338m6A.mp4


##### Step 2: Configure `wdio.env.sample.js`
- Rename `wdio.env.sample.js` to `wdio.env.js`
- Move `wdio.env.js` to the `root` folder of your project or where `wdio.conf.js` exist

Demo: https://img-v3.getdemo.dev/screenshot/HwjLwZEoOk.mp4


##### Step 3: Include `wdio.env.js`
In `wdio.conf.js`, include `wdio.env.js` and update following variables:

```js
const env = require('./wdio.env');

exports.config = {
    ...
    env: env,
    baseUrl: env.base_url,
    ...
}

```
Demo: https://img-v3.getdemo.dev/screenshot/eNboGGqmrh.mp4


In `env.js` tester should set the base URL based on their test environment. // Make sure that the URL ends with '/'.
````js
case 'localhost':
        params.base_url = null // Instead of null insert your base URL inside " ".
        break;
````
Demo: https://img-v3.getdemo.dev/screenshot/BiI0D6ygq3.mp4



##### Step 4: Extend `pageobjects` and variables in `constructor`
Extend all your `pageobjects` to `const Page = require('./../vaah-webdriverio/Page');`, 

Example: `pageobjects/Login.page.js`: 
```js
const Page = require('./../vaah-webdriverio/Page');

class Login extends Page {

    constructor() {
        super();
        this.page.id = "LI"; // Page ID, Please keep this unique for all the pages.
        this.page.name = "Login";
        this.page.path = "login";
        this.page.url = this.base_url + this.page.path;
    }

    open (url=null) {
        if(url)
        {
            this.page.url = url
        }
        return super.open(this.page.url);
    }
    
}
module.exports = new Login();
```
Demo: https://img-v3.getdemo.dev/screenshot/iTSi72u1p3.mp4

#### step 5: All the methods present in Assert class under Assets in vaah-webdriverio should be prefixed with "async" to run the methods in async mode in the test scripts.
Example:
```js
const env = require('./../../../wdio.env');

class Assert{

    async pause()
    {
        if(env.is_human)
        {
            browser.pause(env.is_human_pause*1000);
        }
    }

    async pageTitle(text)
    {
        return expect(browser).toHaveTitleContaining(text);

    }

    async text(selector, text) {
        await expect(selector).toHaveTextContaining(text);
        await this.pause();
    }
    
};

module.exports = new Assert()
```` 

##### Step 6: Writing test cases
In `specs` folder create a file `login.e2e.js` and write following code for example:
```js
const sl = require('../vaah-webdriverio/Selector');
const assert = require('../vaah-webdriverio/Assert');
const login = require('../pageobjects/login.page');

login.group.count = 1; // Group counter which will be used to generate Group ID
login.group.name = 'Login';

describe(login.groupId(), () => {
    //-----------------------------------------------------------
    login.test = {
        count: 1.1, // Test counter which will be used to generate Test ID
        name: 'Tester should be ble to run login test successfully',
        expect: "Alert message 'You logged into a secure area!' should appear",
        data: "You logged into a secure area!",
    }

    it(login.testId(), async () => {
        login.open();
        browser.maximizeWindow();
        await assert.pageTitle("The Internet");
        sl.name("username", "tomsmith"); 
        // This will select the element with attribute as name='username' and will also insert the value "tomsmith".
        sl.name("password", "SuperSecretPassword!");
        sl.class('radius').click();
        await assert.text(sl.id('flash'), login.test.data);
    });
    //-----------------------------------------------------------
 
});
````   
Demo: https://img-v3.getdemo.dev/screenshot/OdRIb4yXIr.mp4

Note: This is just an example of where to write the test script. The test script may differ.


| Selector | In Selector.js|Use|Description|
|--|--|--|--|
|testid|`testid(name,value=null) { let el = this.attr('data-testid', name); if(value) { el.setValue(value) } return el; }`|`sl.testid("royal_email", "demo@test.com")`|This will select the element having attribute `data-testid='royal_email'` and then will insert the value as "demo@test.com" in it.|
|id|`id(id)  {  return $("#"+id);  } `|`sl.id("submit").click;`|This will select the element with attribute id='submit' and will click on it.|
|class|`class(name) { return $("."+name); }`|`sl.class("submit").click;`|This will select the element with attribute `id='submit'` and will click on it.
|$|`$(selector){return $(selector);}`|`sl.$("h1");`|This will select the element having attribute as `h1`. Mostly used during assertion.|
|attr|`attr(attribute, value){return$('['+attribute+'="'+value+'"]'); }`|`sl.attr('href','#/forgot-password' ).click();`|This will select the element having attribute as `href` and its value as `#/forgot-password`.
|name|`name(name,value=null) { let el = this.attr('name', name); if(value) { el.setValue(value) } return el; }`|`sl.name("username", "tomsmith");`|This will select the element with attribute `name="username"` and will insert value "tomsmith" in it.|
|wdio|`wdio(name,value=null) { let el = this.attr('data-wdio', name); if(value) { el.setValue(value) } return el; }`|`sl.wdio("username", "tomsmith")`|This will select the element having attribute `data-wdio='username'` and then will insert the value as "tomsmith" in it. Note: If you are not able to find data-wdio attribute associated with the element in that case either you can add it by yourself or you can ask the developer to add this attribute.|
|dusk|`dusk(name,value=null) { let el = this.attr('dusk', name); if(value) { el.setValue(value) } return el; }`|`sl.dusk("username", "tomsmith")`|This will select the element having attribute `dusk='username'` and then will insert the value as "tomsmith" in it.|
|role|`role(name) { return this.attr('role', name); }`|`sl.role("navigation").click()`|This will select the element having attribute `role="navigation"` and will click on it.|


Page object model will help you to store the element's attribute value at one place so that if there is a change in the value then we have to change it at one page rather then changing it at every instance.

To implement page object we need to to create a file to store these values. Inside the tests folder go to wdio folder and then go inside data folder (if the folder does not exist you can create one). Then inside the data folder create a javascript file elements.js and paste the below mentioned code.

Demo: https://img-v3.getdemo.dev/screenshot/37DZHpTEcH.mp4

Note: Due to limitations this section is not showing in tabular format. Please copy and paste the section in https://stackedit.io/ to view the tabular form.

```js
 class Elements {  
    constructor() {  
        this.login= {
          signin_email: "signin-email_or_username",  
          signin_password: "signin-password",
          button_signin: "signin-signin",
          remember_me_checkbox: "checkbox",
 }}}
 module.exports = new Elements();
```
`this.login={}` block contains all the attributes values used in for the login value. If you are testing any other page you can create a seperate block and add the attributes used in that block. An example is mentioned below: 
 
 Demo: https://img-v3.getdemo.dev/screenshot/bt9XOVsbUS.mp4


 ```js
 class Elements {  
    constructor() {  
        this.login= {
          signin_email: "signin-email_or_username",  
          signin_password: "signin-password",
          button_signin: "signin-signin",
          remember_me_checkbox: "checkbox",
        }
        this.home={
          main_heading:"h1",
          sub_heading:"h2",
        }
 }}
 module.exports = new Elements();
```


When using the above pageobject then you can write the selectors in the following manner:



| Selector | In Selector.js | Use with pageobject |
|--|--|--|
|testid|`testid(name,value=null) { let el = this.attr('data-testid', name); if(value) { el.setValue(value) } return el; }`|`sl.testid("royal_email", "demo@test.com");` or `sl.testid("royal_email").setValue("demo@test.com")`|
|id|`id(id) { return $("#"+id); }`|`sl.id(elements.login.button_signin).click();`|
|class|`class(name) { return $("."+name); }`|`sl.class(elements.login.button_signin).click();`|
|$|`$(selector){return $(selector);}`|`expect(sl.$(elements.login.remember_me_checkbox)).toBeSelected();`|
|attr|`attr(attribute, value){return$('['+attribute+'="'+value+'"]'); }`|`sl.attr("class", elements.login.button_signin).click();`
|name|`name(name,value=null) { let el = this.attr('name', name); if(value) { el.setValue(value) } return el; }`|`sl.name(elements.login.signin_email, "tomsmith");` or `sl.name(elements.login.signin_email).setValue("tomsmith");`|
|wdio|`wdio(name,value=null) { let el = this.attr('data-wdio', name); if(value) { el.setValue(value) } return el; }`|`sl.wdio(elements.login.signin_email, "tomsmith");` or `sl.wdio(elements.login.signin_email).setValue("tomsmith")`|
|dusk|`dusk(name,value=null) { let el = this.attr('dusk', name); if(value) { el.setValue(value) } return el; }`|`sl.dusk(elements.login.signin_password, "SuperSecretPassword")` or `sl.dusk(elements.login.signin_password).setValue("SuperSecretPassword");`|
|role|`role(name) { return this.attr('role', name); }`|`sl.role(elements.login.button_signin).click();`|



Demo: https://img-v3.getdemo.dev/screenshot/F0Q3bDNA9K.mp4
 ```
Note:

1.For selector 'testid', if attribute or locator "data-testid" is present in the html code when we are inspecting or locating an element then we should give the first priority to the locator or attribute 'data-testid'.
   e.g. sl.testid("royal_email", "demo@test.com");

2.Due to limitations this section is not showing in tabular format. Please copy and paste the section in https://stackedit.io/ to view the tabular form.
```
Demo(1): https://img-v4.getdemo.dev/screenshot/chrome_revNZwwQcK.mp4

I have written an example on how to write a test script for logging in using the page object:

 ```js
const sl = require('../vaah-webdriverio/Selector');
const assert = require('../vaah-webdriverio/Assert');
const login = require('../pageobjects/login.page');  
const elements = require('../data/elements');
login.group.count = 1; // Group counter which will be used to generate Group IDlogin.group.name = 'Login';  

describe(login.groupId(), () => {  
    login.test = {  
        count: 1, // Test counter which will be used to generate Test ID  
        name: 'Tester should be ble to run login test successfully',  
        expect: "Alert message 'You logged into a secure area!' should appear",  
        data: "You logged into a secure area!",
    };

    it(login.testId(), async () => {  
        login.open();  
        browser.maximizeWindow();
        await assert.pageTitle("The Internet");  
        sl.wdio(elements.login.signin_email, "tomsmith"); 
        /*This will select the element with attribute as `data-wdio='signin-email_or_username'`which is stored in the elements.js 
          as `signin_email` and will also insert the value "tomsmith".*/  
        sl.dusk(elements.login.signin_password, "SuperSecretPassword"); 
        sl.class(elements.login.button_signin).click();  
        await assert.text(sl.id('flash'), login.test.data);  
    }); 
});
```

Demo: https://img-v3.getdemo.dev/screenshot/RU2Tp6h1qo.mp4


Note: The test_count_id should be unique so that there will be no conflict between the test scripts.
Example:
 ```js
const sl = require('../vaah-webdriverio/Selector');
const assert = require('../vaah-webdriverio/Assert');
const page = require('../pageobjects/about-us.page');
const elements = require('../data/elements');
const assert_data = require('../data/assert-data');


let params = page.params;

params.group.count = 1;
params.group.name = 'About-Us';

describe(page.groupId(params), () => {

//----------------------------------------------------------------------------------------

    params.test = {
        count: 1.1,
        name: "Visit About Us page and check for title",
        expect: "Main heading should be '" + assert_data.about_us_page_title.title + "'",
    };
    it(page.testId(params), async () => {
        page.open();
        browser.maximizeWindow();
        await assert.text(sl.$(elements.about_us.heading), assert_data.about_us_page_title.title);
    });

    params.test = {
        count: 1.2,
        name: "Validating seems interesting button",
        expect: "After clicking the button should reveal the rest of story '" + assert_data.about_us_page_title.last_story + "'",
    };
    it(page.testId(params), async () => {
        page.open();
        browser.maximizeWindow();
        await assert.text(sl.$(elements.about_us.heading), assert_data.about_us_page_title.title);
        sl.wdio(elements.about_us.button_interesting).click();
        await assert.text(sl.wdio(elements.about_us.last_story), assert_data.about_us_page_title.last_story);
    });
});
``` 
Demo: https://img-v4.getdemo.dev/screenshot/phpstorm64_KzTsODht7l.mp4

##### Step 7: Run test 
Now, you can run the test via:
```sh
npx wdio --spec ./tests/wdio/specs/login.e2e.js
```
Demo: https://img-v4.getdemo.dev/screenshot/chrome_uNW2UpI0dH.mp4


or run all tests via:

```shell
npx wdio run ./wdio.conf.js
```
Demo: https://img-v3.getdemo.dev/screenshot/AWcVR496IG.mp4

The Demo shows how a passed and failed test cases will be represented.

##### Step 8: Result

<img src="https://user-images.githubusercontent.com/114494381/193214928-bc3bed84-65ca-4f4c-bf68-9f39ff8ab089.png" width="70%" style="max-width: 100%;">


It contains:
```
[PAGE ID: LI]
[GROUP ID: LI_1]
[TEST ID: LI_1_1.1]
```
Demo: https://img-v4.getdemo.dev/screenshot/phpstorm64_0r5SfdxoR8.mp4

If you need to run tests based on `page id`, `group id` or `test id`, you can use following command:

```shell
npx wdio --mochaOpts.grep <page id> 
e.g. npx wdio --mochaOpts.grep LI // This will run all the test cases under the Page with Page ID LI_1
Demo:https://img-v3.getdemo.dev/screenshot/jqNYsEBnhT.mp4

npx wdio --mochaOpts.grep <group id>
e.g. npx wdio --mochaOpts.grep LI_1 // This will run all the test cases under the Group with Group ID LI_1
Demo:https://img-v3.getdemo.dev/screenshot/b54baoyxkZ.mp4

npx wdio --mochaOpts.grep <test id>
e.g. npx wdio --mochaOpts.grep LI_1_1.1 // This will run all the test cases under the Page ID LI having Group ID 1 and Test ID starting with 1.1
Demo:https://img-v4.getdemo.dev/screenshot/phpstorm64_NhXad1pY4Z.mp4
// Note: If you have test case with test ID as LI_1_11, LI_1_12... LI_1_19, these tests will also run if you provide the test ID as LI_1_1
// To avoid this situation you can use a keyword to run a single test, but make sure to keep the keyword unique otherwise all the test cases having that keyword will run while executing tests. 
```
or you can even run the test cases based on a specific keyword:
```npx wdio --mochaOpts.grep <any keyword>
e.g. npx wdio --mochaOpts.grep smoke
Demo: https://img-v3.getdemo.dev/screenshot/vju9IYLTiO.mp4
```
##### Possible error
 ```
@wdio/runner: Error: Failed to create session.
session not created: This version of ChromeDriver only supports Chrome version 96
```
If this error occurrs that means your `wdio-chromedriver-service` and `chromedriver` dependencies are outdated and those need to be updated.
Easiest way to update the dependency is provided in the demo.

Demo: https://img-v3.getdemo.dev/screenshot/xL5B0R3Gar.mp4

  
 
<br/>

## Support us

Please consider starring the project to show your :heart: and support.

[WebReinvent](https://webreinvent.com) is a web agency based in Delhi, India. You'll find an overview of all our open source projects [on github](https://github.com/webreinvent).
