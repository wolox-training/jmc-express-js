const requestPackage = require('request');
const { logger } = require('../../logger/index');

const request = options =>
  new Promise((resolve, reject) => {
    requestPackage[options.method](options, (error, response) => {
      if (error || !response.statusCode || response.statusCode !== 200) {
        logger.error(Object.assign(error, options));
        return reject(error);
      }
      return resolve(response);
    });
  });

module.exports = { request };
