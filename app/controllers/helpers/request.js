const requestPackage = require('request');
const logger = require('../../logger');

const request = options =>
  new Promise((resolve, reject) => {
    requestPackage[options.method](options, (error, response) => {
      if (error) {
        logger.error(Object.assign(error, options));
        return reject(error);
      }
      if (!response.statusCode || response.statusCode !== 200) {
        reject(error);
      }
      return resolve(response);
    });
  });

module.exports = { request };
