const bcrypt = require('bcrypt');
exports.createHash = password =>
  new Promise((resolve, reject) =>
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return reject(err);
      }
      return resolve(hash);
    })
  );

exports.compareHash = (hash, plainPassword) =>
  new Promise((resolve, reject) => {
    bcrypt.compare(plainPassword, hash, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
