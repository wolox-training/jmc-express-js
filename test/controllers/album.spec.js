const request = require('supertest');
const app = require('../../app');

describe('Test the album index path', () => {
  test('It should response the GET method', () =>
    request(app)
      .get('/albums')
      .expect(200));
});

describe('Test the photos index path', () => {
  test('It should response the GET method', () =>
    request(app)
      .get('/albums/1/photos')
      .expect(200));
});
