var hotels = require('./hotels');

exports.assignRoutes = function(app) {
  app.get('/hotels', hotels.getHotels);
  app.post('/hotel', hotels.getHotel);
  app.put('/filter/star', hotels.getFilterStar);
  app.post('/filter/name', hotels.getFilterName);
};
