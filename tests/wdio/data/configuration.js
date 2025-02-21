const Page = require('../vaah-webdriverio/Page');

class Configuration extends Page{
    constructor() {
        super();
        this.params = {
            group: {
                count: null,
                name: null,
            }
        }
        this.element = {
            env_testid: 'configuration-env',
            env_option_custom_label: 'Custom',
            env_option_local_label: 'Local',
            env_option_develop_label: 'Develop',
            env_option_staging_label: 'Staging',
            env_option_production_label: 'Production',
            env_option_wdiojs_label: 'Wdiojs',
            env_file_name_testid: 'configuration-custom_evn',
            debug_testid: 'configuration-debug',
            debug_option_true_label: 'True',
            debug_option_false_label: 'False',
            timezone_testid: 'configuration-timezone',
            timezone_option_paris_label: '(GMT+01:00) Paris',
            app_name_testid: 'configuration-app_name',
            db_type_testid: 'configuration-db_type',
            db_type_option_mysql_label: 'MySQL',
            db_type_option_postgresql_label: 'PostgreSQL',
            db_type_option_sqlite_label: 'SQLite',
            db_type_option_sql_server_label: 'SQL Server',
            db_host_testid: 'configuration-db_host',
            db_port_testid: 'configuration-db_port',
            db_name_testid: 'configuration-db_name',
            db_username_testid: 'configuration-db_username',
            db_password_testid: 'configuration-db_password',
            db_password_eye_btn_testid: 'configuration-db_password_eye',
            db_connection_btn_testid: 'configuration-test_db_connection_btn_text',
            mail_provider_testid: 'configuration-mail_provider',
            mail_provider_option_mailtrap_label: 'MailTrap',
            mail_provider_option_gmail_label: 'GMail',
            mail_provider_option_other_label: 'Other',
            mail_driver_testid: 'configuration-mail_driver',
            mail_host_testid: 'configuration-mail_host',
            mail_port_testid: 'configuration-mail_port',
            mail_username_testid: 'configuration-mail_username',
            mail_password_testid: 'configuration-mail_password',
            mail_password_eye_btn_testid: 'configuration-mail_password_eye',
            mail_encryption_testid: 'configuration-mail_encryption',
            mail_encryption_none_label: 'None',
            mail_encryption_ssl_label: 'SSL',
            mail_encryption_tls_label: 'TLS',
            from_name_testid: 'configuration-mail_from_name',
            from_email_testid: 'configuration-mail_from_address',
            test_mail_btn_testid: 'configuration-test_mail_btn_text',
            save_btn_testid: 'configuration-save_btn',
            mail_username_dialog_testid: 'configuration-test_email_to',
            mail_username_close_btn_testid: 'configuration-test_mail_close',
            mail_username_send_btn_testid: 'configuration-send_mail',
            validation_message_class: 'p-toast-detail',
            validation_message_close_btn_label: 'Close'
        }
        this.value = {
            env_file: 'Test',
            db_name: 'vaahcms',
            db_username: 'root',
            db_password: 'testing',
            mail_driver: 'smtp',
            mail_host: 'sandbox.smtp.mailtrap.io',
            mail_port: '2525',
            mail_username: '0f11c753248d08',
            mail_password: '91b77e6314f800',
            from_name:'TestCases',
            from_email: 'we@webreinvent.com',
            invalid_db_host: 'test123',
            invalid_db_port: 1234,
            invalid_db_name: 'test123',
            invalid_db_username: 'testing123',
            invalid_password: '123',
            invalid_mail_driver: 'test',
            invalid_mail_host: 'test',
            invalid_mail_port: 'test',
            invalid_mail_username: 'test',
            invalid_mail_password: 'test',
            invalid_from_email: '123',
        }
        this.params.page = {
            id: "CG",
            name: "Configuration",
            url : this.base_url+"/backend#/setup/install/configuration"
        }

        this.groups = [
            {
                count: 1,
                name: 'UI',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify the URL of the Configuration Page',
                        expect: 'The URL should be: '+this.params.page.url,
                        assert: this.params.page.url
                    },
                    {
                        count: 1.2,
                        name: 'Verify the Title of the Configuration Page',
                        expect: 'The title of the page should be: Configuration - Setup',
                        assert: 'Configuration - Setup'
                    },
                    {
                        count: 1.3,
                        name: 'Verify if the Test Database Connection Button exists or not',
                        expect: 'The Test Database Connection button should exist on the page',
                    },
                    {
                        count: 1.4,
                        name: 'Verify if the Test Mail Configuration Button exists or not',
                        expect: 'The Test Mail Configuration button should exist on the page',
                    },
                    {
                        count: 1.5,
                        name: 'Verify if the Save & Next Button exists or not',
                        expect: 'The Save & Next button should exist on the page',
                    }
                ]
            },
            {
                count: 2,
                name: 'Database Validation',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify the response of Test Database Button with invalid Database Host',
                        expect: 'The user should see a validation message regarding the error.',
                        assert: 'No such host is known'
                    },
                    {
                        count: 1.2,
                        name: 'Verify the response of Test Database Button with blank Database Host',
                        expect: 'The user should see a validation message regarding the error.',
                        assert: 'Enter database host'
                    },
                    {
                        count: 1.3,
                        name: 'Verify the response of Test Database Button with blank Database Port',
                        expect: 'The user should see a validation message regarding the error.',
                        assert: 'Enter database port'
                    },
                    {
                        count: 1.4,
                        name: 'Verify the response of Test Database Button with invalid Database Port',
                        expect: 'The user should see a validation message regarding the error.',
                        assert: 'No connection could be made'
                    },
                    {
                        count: 1.5,
                        name: 'Verify the response of Test Database Button with blank Database Name',
                        expect: 'The user should see a validation message regarding the error.',
                        assert: 'Enter database name'
                    },
                    {
                        count: 1.6,
                        name: 'Verify the response of Test Database Button with invalid Database Name',
                        expect: 'The user should see a validation message regarding the error.',
                        assert: 'Unknown database'
                    },
                    {
                        count: 1.7,
                        name: 'Verify the response of Test Database Button with blank Database Username',
                        expect: 'The user should see an validation message regarding the error.',
                        assert: 'Enter database username'
                    },
                    {
                        count: 1.8,
                        name: 'Verify the response of Test Database Button with invalid Database Username',
                        expect: 'The user should see an validation message regarding the error.',
                        assert: 'Access denied for user'
                    },
                ]
            },
            {
                count: 3,
                name: 'Functionality',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify the functionality of Test Database connection button when mandatory fields are blank',
                        expect: 'The user should see an error message with the list of fields that are mandatory',
                        assert: 'Enter database name'
                    },
                    {
                        count: 1.2,
                        name: 'Verify the functionality of Test Database connection button when mandatory fields are filled',
                        expect: 'A success message should be displayed',
                        assert: 'Successfully connect with Database'
                    },
                    {
                        count: 1.3,
                        name: 'Verify the functionality of Test Mail Configuration button',
                        expect: 'The test mail configuration button should open a dialog box with Mail Username field',
                    },
                    {
                        count: 1.4,
                        name: 'Verify if the close button in Mail Username dialog box is functional or not',
                        expect: 'The close button should close the Mail Username dialog box',
                    },
                    {
                        count: 1.5,
                        name: 'Verify if the user can select an option from ENV dropdown menu',
                        expect: 'The user should be able to select an option from the ENV dropdown menu',
                        assert: 'Staging'
                    },
                    {
                        count: 1.6,
                        name: 'Verify if the user can select an option from Debug dropdown menu',
                        expect: 'The user should be able to select an option from the Debug dropdown menu',
                        assert: 'False'
                    },
                    {
                        count: 1.7,
                        name: 'Verify if the user can select an option from Timezone dropdown menu',
                        expect: 'The user should be able to select an option from the Timezone dropdown menu',
                        assert: '(GMT+01:00) Paris'
                    },
                    {
                        count: 1.8,
                        name: 'Verify if the user can select an option from Database Type dropdown menu',
                        expect: 'The user should be able to select an option from the Database Type dropdown menu',
                        assert: 'SQLite'
                    },
                    {
                        count: 1.9,
                        name: 'Verify if the user can select an option from Mail Provider dropdown menu',
                        expect: 'The user should be able to select an option from the Mail Provider dropdown menu',
                        assert: 'GMail'
                    },
                    {
                        count: 2.1,
                        name: 'Verify if the user can select an option from Mail Encryption dropdown menu',
                        expect: 'The user should be able to select an option from the Mail Encryption dropdown menu',
                        assert: 'SSL'
                    },
                    {
                        count: 2.2,
                        name: 'Verify if a textbox appears or not when the user select Custom option from the ENV Dropdown Menu ',
                        expect: 'A textbox should appear for the Custom option in ENV Dropdown menu',
                        assert: 'configuration-custom_evn'
                    },
                    {
                        count: 2.3,
                        name: 'Verify if the user can type in the Env File Name textbox of Custom Env Option',
                        expect: 'The user should be able to type in the Env File Name textbox',
                        assert: 'Test'
                    },

                    {
                        count: 2.4,
                        name: 'Verify if the database connection is established for the MySQL Database Type',
                        expect: 'The Database connection should establish for MySQL if all the data is valid',
                        assert: 'Successfully connect with Database'
                    },
                    {
                        count: 2.5,
                        name: 'Verify if the database connection is established for the PostgreSQL Database Type',
                        expect: 'The Database connection should not establish for PostgreSQL, and the user should see the reason for it',
                        assert: 'could not find driver'
                    },
                    {
                        count: 2.6,
                        name: 'Verify if the database connection is established for the SQLite Database Type',
                        expect: 'The Database connection should not establish for SQLite',
                        assert: 'unable to open database file'
                    },
                    {
                        count: 2.7,
                        name: 'Verify if the database connection is established for the SQL Server Database Type',
                        expect: 'The Database connection should not establish for SQL Server',
                        assert: 'could not find driver'
                    },
                    {
                        count: 2.8,
                        name: 'Verify the functionality of eye icon of the Database Password field',
                        expect: 'Clicking on the eye icon should make the text in the Password field visible',
                        assert: {
                            attribute: 'type',
                            value: 'text'
                        }
                    },
                    {
                        count: 2.9,
                        name: 'Verify the functionality of eye icon of the Mail Password field',
                        expect: 'Clicking on the eye icon should make the text in the Password field visible',
                        assert: {
                            attribute: 'type',
                            value: 'text'
                        }
                    },
                ]
            },
            {
                count: 4,
                name: 'Mail Validation',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify if the placeholder text is present in the Mail Driver field or not',
                        expect: 'The placeholder text should be present in the Mail Driver field',
                        assert: 'placeholder'
                    },
                    {
                        count: 1.2,
                        name: 'Verify if the user can type in the Mail Driver field or not',
                        expect: 'The user should be able to type in the Mail Driver field',
                        assert: 'smtp'
                    },
                    {
                        count: 1.3,
                        name: 'Verify if the placeholder text is present in the Mail Host field or not',
                        expect: 'The placeholder text should be present in the Mail Host field',
                        assert: 'placeholder'
                    },
                    {
                        count: 1.4,
                        name: 'Verify if the user can type in the Mail Host field or not',
                        expect: 'The user should be able to type in the Mail Host field',
                        assert: 'sandbox.smtp.mailtrap.io'
                    },
                    {
                        count: 1.5,
                        name: 'Verify if the placeholder text is present in the Mail Port field or not',
                        expect: 'The placeholder text should be present in the Mail Port field',
                        assert: 'placeholder'
                    },
                    {
                        count: 1.6,
                        name: 'Verify if the user can type in the Mail Port field or not',
                        expect: 'The user should be able to type in the Mail Port field',
                        assert: '2525'
                    },
                    {
                        count: 1.7,
                        name: 'Verify if the placeholder text is present in the Mail Username field or not',
                        expect: 'The placeholder text should be present in the Mail Username field',
                        assert: 'placeholder'
                    },
                    {
                        count: 1.8,
                        name: 'Verify if the user can type in the Mail Username field or not',
                        expect: 'The user should be able to type in the Mail Username field',
                        assert: '0f11c753248d08'
                    },
                    {
                        count: 1.9,
                        name: 'Verify if the placeholder text is present in the Mail Password field or not',
                        expect: 'The placeholder text should be present in the Mail Password field',
                        assert: 'placeholder'
                    },
                    {
                        count: 2.1,
                        name: 'Verify if the user can type in the Mail Password field or not',
                        expect: 'The user should be able to type in the Mail Password field',
                        assert: '91b77e6314f800'
                    },
                    {
                        count: 2.2,
                        name: 'Verify if the text in password field is hidden by default or not',
                        expect: 'The text in the password field should be hidden.',
                        assert: {
                            attribute: 'type',
                            value: 'password'
                        }
                    },
                    {
                        count: 2.3,
                        name: 'Verify if the placeholder text is present in the From Name field or not',
                        expect: 'The placeholder text should be present in the From Name field',
                        assert: 'placeholder'
                    },
                    {
                        count: 2.4,
                        name: 'Verify if the user can type in the From Name field or not',
                        expect: 'The user should be able to type in the From Name field',
                        assert: 'TestCases'
                    },
                    {
                        count: 2.5,
                        name: 'Verify if the placeholder text is present in the From Email field or not',
                        expect: 'The placeholder text should be present in the From Email field',
                        assert: 'placeholder'
                    },
                    {
                        count: 2.6,
                        name: 'Verify if the user can type in the From Email field or not',
                        expect: 'The user should be able to type in the From Email field',
                        assert: 'we@webreinvent.com'
                    },
                ]
            },
            {
                count: 5,
                name: 'Test Mail Configuration Functionality',
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify the functionality of Send Email button in Test Mail Configuration window when mandatory fields are blank',
                        expect: 'The user should see an error message with the list of mandatory fields',
                        assert: 'The mail driver field is required.'
                    },
                    {
                        count: 1.2,
                        name: 'Verify the response of Send Email button for blank Mail Driver',
                        expect: 'The user should see an error message regarding the same',
                        assert: 'The mail driver field is required'
                    },
                    {
                        count: 1.3,
                        name: 'Verify the response of Send Email button for invalid Mail Driver',
                        expect: 'The user should see an error message regarding the same',
                        assert: 'Unsupported mail transport'
                    },
                    {
                        count: 1.4,
                        name: 'Verify the response of Send Email button for blank Mail Host',
                        expect: 'The user should see an error message regarding the same',
                        assert: 'The mail host field is required'
                    },
                    {
                        count: 1.5,
                        name: 'Verify the response of Send Email button for invalid Mail Host',
                        expect: 'The user should see an error message regarding the same',
                        assert: 'No such host is known'
                    },
                    {
                        count: 1.6,
                        name: 'Verify the response of Send Email button for blank Mail Port',
                        expect: 'The user should see an error message regarding the same',
                        assert: 'The mail port field is required'
                    },
                    {
                        count: 1.7,
                        name: 'Verify the response of Send Email button for invalid Mail Port',
                        expect: 'The user should see an error message regarding the same',
                        assert: 'Something went wrong'
                    },
                    {
                        count: 1.8,
                        name: 'Verify the response of Send Email button for blank Mail Username',
                        expect: 'The user should see an error message regarding the same',
                        assert: 'The mail username field is required'
                    },
                    {
                        count: 1.9,
                        name: 'Verify the response of Send Email button for invalid Mail Username',
                        expect: 'The user should see an error message regarding the same',
                        assert: 'Failed to authenticate'
                    },
                    {
                        count: 2.1,
                        name: 'Verify the response of Send Email button for blank Mail Password',
                        expect: 'The user should see an error message regarding the same',
                        assert: 'The mail password field is required.'
                    },
                    {
                        count: 2.2,
                        name: 'Verify the response of Send Email button for invalid Mail Password',
                        expect: 'The user should see an error message regarding the same',
                        assert: 'Failed to authenticate'
                    },
                    {
                        count: 2.3,
                        name: 'Verify the response of Send Email button for blank From Name',
                        expect: 'The user should see an error message regarding the same',
                        assert: 'The mail from name field is required'
                    },
                    {
                        count: 2.4,
                        name: 'Verify the response of Send Email button for blank From Email',
                        expect: 'The user should see an error message regarding the same',
                        assert: 'The mail from address field is required'
                    },
                    {
                        count: 2.5,
                        name: 'Verify the response of Send Email button for invalid From Email data',
                        expect: 'The user should see an error message regarding the same',
                        assert: 'does not comply with addr-spec'
                    },
                    {
                        count: 2.6,
                        name: 'Verify the response of Send Email button for invalid Mail Username of Test Mail Configuration window',
                        expect: 'The user should see an error message regarding the same',
                        assert: 'does not comply with addr-spec'
                    },
                    {
                        count: 2.7,
                        name: 'Verify the functionality of Send Email button in Test Mail Configuration window when valid details are filled',
                        expect: 'The user should see a success message regarding the send email',
                        assert: 'Test email successfully sent'
                    },
                ]
            },
            {
                count: 6,
                name: "End to End",
                tests: [
                    {
                        count: 1.1,
                        name: 'Verify if the user can proceed by leaving the mandatory fields blank',
                        expect: 'User should not be able to proceed and the save button should be disabled',
                        assert: {
                            database_btn_assert: 'Enter database name',
                            save_btn_assert: 'disabled'
                        }
                    },
                    {
                        count: 1.2,
                        name: 'Verify if the user can proceed or not if the App Name fields is blank',
                        expect: 'The user should not be able to proceed if App Name field is blank',
                        assert: 'The app name field is required'
                    },
                    {
                        count: 1.3,
                        name: 'Verify if the user can proceed by filling all the mandatory fields',
                        expect: 'The user should be able to proceed if data is entered in the fields',
                        assert: 'Configuration Saved'
                    },
                    {
                        count: 1.4,
                        name: 'Verify if the user can proceed by selecting a Custom option from the Env Dropdown menu and valid data in the other fields',
                        expect: 'The user should be able to proceed if a Env File name is provided for Custom Option',
                        assert: 'Configuration Saved'
                    },
                    {
                        count: 1.5,
                        name: 'Verify if the user can proceed by selecting a Develop option from the Env Dropdown menu and valid data in the other fields',
                        expect: 'The user should be able to proceed if valid data is entered and Develop Option is selected',
                        assert: 'Configuration Saved'
                    },
                    {
                        count: 1.6,
                        name: 'Verify if the user can proceed by selecting a Staging option from the Env Dropdown menu and valid data in the other fields',
                        expect: 'The user should be able to proceed if valid data is entered and Staging Option is selected',
                        assert: 'Configuration Saved'
                    },
                    {
                        count: 1.7,
                        name: 'Verify if the user can proceed by selecting a Production option from the Env Dropdown menu and valid data in the other fields',
                        expect: 'The user should be able to proceed if valid data is entered and Production Option is selected',
                        assert: 'Configuration Saved'
                    },
                    {
                        count: 1.8,
                        name: 'Verify if the user can proceed by selecting a Wdiojs option from the Env Dropdown menu and valid data in the other fields',
                        expect: 'The user should be able to proceed if valid data is entered and Wdiojs Option is selected',
                        assert: 'Configuration Saved'
                    },
                ]
            }
        ]
    }
}

module.exports = new Configuration();
