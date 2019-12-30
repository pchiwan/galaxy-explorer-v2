const { findSystem } = require('../../../../../../src/business');
const { HTTP_OK, HTTP_NOT_FOUND } = require('../../../../../../src/constants');

module.exports = function (req, res) {
  const system = findSystem(req.query.clusterName, req.query.systemName);
  if (system) {
    res.status(HTTP_OK);
    res.send({
      name: system.name,
      planets: system.planets.map(p => p.name)
    });
  } else {
    res.status(HTTP_NOT_FOUND);
  }
};
