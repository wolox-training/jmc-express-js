const { healthCheck } = require('./controllers/healthCheck');
const { index: listAlbums, photos: listAlbumPhotos } = require('./controllers/album');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/albums', listAlbums);
  app.get('/albums/:id/photos', listAlbumPhotos);
};
