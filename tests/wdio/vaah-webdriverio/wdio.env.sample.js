let params = {
    debug: true,
    is_human: false,
    is_human_pause: 2, // in seconds
    env: null,
    small_pause: 2000,
    medium_pause: 5000,
    long_pause: 10000,
    base_url: null,
    version: null,
    capabilities: [{
        browserName: 'chrome'
    }]
};
/*
|--------------------------------------------------------------------------
| Site Environment
|--------------------------------------------------------------------------
*/
params.env = 'localhost';
//params.env = 'develop';
//params.env = 'staging';
//params.env = 'production';

switch(params.env)
{
    case 'localhost':
        params.base_url = null
        break;

    case 'develop':
        params.base_url = null
        break;

    case 'staging':
        params.base_url = null
        break;

    case 'production':
        params.base_url = null
        break;

    default:
        params.base_url = null
        break;

}

function getParams() {

    if(this.params.is_human === false){
        this.params.capabilities =[{
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['headless', 'disable-gpu']
            }
        }]
    }

    return this.params;
}


module.exports = params;
