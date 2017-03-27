'use strict';

var convict = require('convict');

var config = convict({
  json: {
    url: {
      doc: 'The JSON resource url.',
      default: '',
      format: String,
      env: 'JSON_REQ_URL'
    },
    headers: {
      doc: 'Some headers',
      default: [],
      format: Array,
      env: 'JSON_REQ_HEADERS'
    }
  }
});

module.exports = config;