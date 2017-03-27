'use strict';

var request = require('superagent-bluebird-promise');
var config = require('./config');
var chalk = require('chalk');

/**
 * @param {Mozaik} mozaik
 */
var client = function client(mozaik) {

    mozaik.loadApiConfig(config);

    function buildApiRequest(params) {
        var url = params.url;
        var headers = params.headers;
        // let url     = config.get('json.url');
        // let headers = config.get('json.headers');
        var req = request.get(url);

        Object.keys(headers).forEach(function (key) {
            req.set(key, headers[key]);
        });

        mozaik.logger.info(chalk.yellow('[json] calling ' + url));

        return req.promise();
    }

    var apiCalls = {
        data: function data(params) {
            return buildApiRequest(params).then(function (res) {
                console.log(JSON.parse(res.text));
                return JSON.parse(res.text);
            });
        }
    };

    return apiCalls;
};

module.exports = client;