const { getClusters } = require('../../src/business');
const { HTTP_OK, HTTP_NOT_FOUND } = require('../../src/constants');

module.exports = function (req, res) {
  res.status(HTTP_OK);
  res.json(getClusters());
};
