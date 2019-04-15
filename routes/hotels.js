var fs = require('fs');

var hotels = JSON.parse(fs.readFileSync('./data/data.json'));

exports.getHotels = (req, res) => {
  console.log('Consulta de hoteles');
  res.send(hotels);
};

exports.getHotel = (req, res) => {
  var hotelId = req.body.hotelId;

  var result;
  for (var i = hotels.length - 1; i >= 0; i--) {
    var hotel = hotels[i].id;
    if (hotel == hotelId) {
      result = hotels[i];
      break;
    } else {
      result = 'No se encontro el hotel buscado';
    }
  }
  console.log('Consulta de hotel');
  res.send(result);
};

exports.getFilterStar = (req, res) => {
  var stars = req.body.stars;

  var result = [];
  if (stars.length > 0) {
    for (var i = hotels.length - 1; i >= 0; i--) {
      for (var j = stars.length - 1; j >= 0; j--) {
        var hotelStar = hotels[i].stars;
        var starId = stars[j];
        if (hotelStar == starId) {
          result.push(hotels[i]);
        }
      }
    }
  }

  console.log('Consulta por estrellas');
  res.send(result);
};

exports.getFilterName = (req, res) => {
  var nameSearch = req.body.name.toLowerCase();

  var result = [];
  for (var i = hotels.length - 1; i >= 0; i--) {
    var name = hotels[i].name.toLowerCase();
    if (name.indexOf(nameSearch) > 0) {
      result.push(hotels[i]);
    }
  }

  console.log('Consulta por nombre');
  res.send(result);
};
