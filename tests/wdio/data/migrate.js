const Page = require('../vaah-webdriverio/Page');

class Migrate extends Page {
    constructor() {
        super();
        this.params = {
            group: {
                count: null,
                name: null,
            }
        }
        this.element = {
            env_file_testid: 'setup-use_env',
            migration_message_testid: 'migrate-message_text',
            migration_message_role: 'alert',
            migration_btn_testid: 'migrate-run_migration',
            cancel_btn_testid: 'migrate-confirmation_cancel_btn',
            proceed_btn_testid: 'migrate-confirmation_proceed_btn',
            back_btn_testid: 'migrate-back_btn_text',
            save_btn_testid: 'migrate-save_btn_text',
            close_btn_testid: 'migrate-message_close_btn',
            migration_close_btn_testid: 'migrate-confirmation_close_btn',
            migration_confirmation_message_testid: 'migrate-confirmation_message',
            validation_message_class: 'p-toast-detail'
        }
        this.params.page = {
            id: "MG",
            name: "Migrate",
            url: this.base_url + "/backend#/setup/install/migrate"
        }

        this.groups = [
            {
                count: 1,
                name: 'UI',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify the URL of the Migrate Page',
                        expect: 'The URL should be: ' + this.params.page.url,
                        assert: this.params.page.url
                    },
                    {
                        count: 1.2,
                        name: 'Verify the Title of the Migrate Page',
                        expect: 'The title of the page should be: Migrate - Setup',
                        assert: 'Migrate - Setup'
                    },
                    {
                        count: 1.3,
                        name: 'Verify if the Active Env File is visible or not',
                        expect: 'The Active Env File should be visible with file name',
                    },
                    {
                        count: 1.4,
                        name: 'Verify if the Database Migration message is visible on the page or not',
                        expect: 'The Database migration message should be visible on the page above migration button',
                        assert: 'This step will run database migrations and seeds.'
                    },
                    {
                        count: 1.5,
                        name: 'Verify if the migrate button is available on the page or not',
                        expect: 'The migrate button should be available on the page',
                    },
                    {
                        count: 1.6,
                        name: 'Verify if the back button is available on the page or not',
                        expect: 'The back button should be available on the page'
                    },
                    {
                        count: 1.7,
                        name: 'Verify if the Save & Next button is available on the page or not',
                        expect: 'The Save & Next button should be available on the page'
                    },
                    {
                        count: 1.8,
                        name: 'Verify if the Migrate & Run Seed turns green after a successful database migration or not',
                        expect: 'The button should turn green if the database migration is successful',
                        assert: {
                            attribute: 'data-pc-severity',
                            value: 'success'
                        }
                    }
                ],
            },
            {
                count: 2,
                name: 'Functionality',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify the functionality of the close button in database migration message',
                        expect: 'The Database message should disappear from the page',
                        assert: {
                            attribute: 'style',
                            value: 'display: none;'
                        }
                    },
                    {
                        count: 1.2,
                        name: 'Verify the functionality of the Migrate & Run Seed button',
                        expect: 'The button should be functional and a window should open with the choice to proceed or cancel'
                    },
                    {
                        count: 1.3,
                        name: 'Verify the message in the Delete Existing migration window',
                        expect: 'The message should clearly convey that proceeding further will delete all the existing migration',
                        assert: 'This will delete all existing migration'
                    },
                    {
                        count: 1.4,
                        name: 'Verify the functionality of the close button in the Deleting Existing migrations window',
                        expect: 'The button should close the window'
                    },
                    {
                        count: 1.5,
                        name: 'Verify the functionality of the Cancel button in Delete Existing migration window.',
                        expect: 'The window should close as soon as the user clicks on the cancel button'
                    },
                    {
                        count: 1.6,
                        name: 'Verify the functionality of the Proceed button in Delete Existing migration window.',
                        expect: 'After clicking on the proceed button, the user should see a success message',
                        assert: 'Migration were successful'
                    },
                    {
                        count: 1.7,
                        name: 'Verify the functionality of the back button',
                        expect: 'The back button should navigate to the configuration page',
                        assert: this.base_url+'/backend#/setup/install/configuration'
                    },
                    {
                        count: 1.8,
                        name: 'Verify the functionality of the Save & Next button',
                        expect: 'After clicking on the button, the user should navigate to the dependencies page',
                        assert: this.base_url+'/backend#/setup/install/dependencies'
                    }
                ]
            }
        ]
    }
}

module.exports = new Migrate();
