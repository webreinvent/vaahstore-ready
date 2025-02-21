const Page = require('../vaah-webdriverio/Page');

class Setup extends Page{
    constructor() {
        super();
        this.params = {
            group: {
                count: null,
                name: null,
            }
        }
        this.element = {
            install_button_testid: 'setup-install_vaahcms'
        }
        this.params.page = {
            id: "SP",
            name: "Setup",
            url : this.base_url+"/backend#/setup"
        }
        this.groups = [
            {
                count: 1,
                name: "Setup",
                tests: [
                    {
                        count: 1.1,
                        name: "Verify the URL",
                        expect: "The URL should be: "+this.params.page.url,
                        assert: this.params.page.url
                    },
                    {
                        count: 1.2,
                        name: "Verify the Title",
                        expect: "The title should be: Setup",
                        assert: "Setup"
                    },
                    {
                        count: 1.3,
                        name: "Verify if the Install button exist or not",
                        expect: "The button should exist",
                    },
                    {
                        count: 1.4,
                        name: "Verify if the button lead to a proper landing page or not",
                        expect: "The button should lead to a proper landing page.",
                        assert: this.params.page.url+"/install/configuration"
                    },
                ]

            }
        ]
    }
}

module.exports = new Setup();
