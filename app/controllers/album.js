const { request } = require('./helpers/request');
const API_URL = 'https://jsonplaceholder.typicode.com';

const index = (_, res, next) => {
  request({
    url: `${API_URL}/albums`,
    method: 'get',
    json: true
  })
    .then(response => res.send(response.body))
    .catch(next);
};

const photos = (req, res, next) => {
  request({
    url: `${API_URL}/albums/${req.params.id}/photos`,
    method: 'get',
    json: true
  })
    .then(response => res.send(response.body))
    .catch(next);
};

module.exports = { index, photos };
