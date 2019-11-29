const requestPackage = require('request');
const { logger } = require('../../logger/index');

const request = options =>
  new Promise((resolve, reject) => {
    requestPackage[options.method](options, (error, response) => {
      if (error) {
        // eslint-disable-next-line no-console
        console.log(error.message);
        logger.error(Object.assign(error, options));
        return reject(error);
      }
      if (response.statusCode !== 200) {
        return reject(error);
      }
      if (!response.statusCode) {
        // eslint-disable-next-line no-console
        console.log(error.message);
        return reject(error);
      }
      return resolve(response);
    });
  });

module.exports = { request };
