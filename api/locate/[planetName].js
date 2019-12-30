const { locatePlanet } = require('../../src/business');
const { HTTP_OK, HTTP_NOT_FOUND } = require('../../src/constants');

module.exports = function (req, res) {
  const path = locatePlanet(req.query.planetName);

  if (path) {
    res.status(HTTP_OK);
    res.send(path);
  } else {
    res.status(HTTP_NOT_FOUND);
  }
};
