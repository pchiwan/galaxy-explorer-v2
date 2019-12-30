const { findSystem } = require('../../../../src/business');
const { HTTP_OK, HTTP_NOT_FOUND } = require('../../../../src/constants');

module.exports = function (req, res) {
  const system = findSystem(req.query.clusterName, req.query.systemName);

  if (system) {
    res.status(HTTP_OK);
    res.json(system.info);
  } else {
    res.status(HTTP_NOT_FOUND);
  }
};
