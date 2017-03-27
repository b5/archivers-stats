const request = require('superagent-bluebird-promise');
const config  = require('./config');
const chalk   = require('chalk');

/**
 * @param {Mozaik} mozaik
 */
const client = (mozaik) => {

    mozaik.loadApiConfig(config);

    function buildApiRequest(params) {
        const url = params.url;
        const headers = params.headers;
        // let url     = config.get('json.url');
        // let headers = config.get('json.headers');
        let req     = request.get(url);

        Object.keys(headers).forEach(key => {
            req.set(key, headers[key]);
        })

        mozaik.logger.info(chalk.yellow(`[json] calling ${ url }`));

        return req.promise();
    }

    const apiCalls = {
        data(params) {
            return buildApiRequest(params)
                .then(res => { return { response: JSON.parse(res.text)}; })
            ;
        }
    };

    return apiCalls;
};

module.exports = client;