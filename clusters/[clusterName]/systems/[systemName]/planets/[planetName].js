const { findPlanet } = require('../../../../../../src/business');
const { HTTP_OK, HTTP_NOT_FOUND } = require('../../../../../../src/constants');

module.exports = function (req, res) {
  const planet = findPlanet(
    req.query.clusterName,
    req.query.systemName,
    req.query.planetName
  );

  if (planet) {
    res.status(HTTP_OK);
    res.json(planet);
  } else {
    res.status(HTTP_NOT_FOUND);
  }
};
