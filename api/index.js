const { HTTP_OK } = require('../src/constants');

module.exports = function (req, res) {
  res.status(HTTP_OK);
  res.send('Hello world! 👋');
};
