const { getGasGiants } = require('../../src/business');
const { HTTP_OK } = require('../../src/constants');

module.exports = function (req, res) {
  res.status(HTTP_OK);
  res.json(getGasGiants());
};
