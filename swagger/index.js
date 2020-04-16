const fs = require('fs');
const { HTTP_OK, HTTP_NOT_FOUND } = require('../src/constants');

module.exports = function (req, res) {
  try {
    fs.readFile('./index.html', function (error, data) {
      if (error) {
        throw error;
      } else {
        res.writeHead(HTTP_OK, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      }
    }
  } catch (error) {
    res.writeHead(HTTP_NOT_FOUND);
    res.write('Unable to load Swagger UI');
    res.write(error);
    res.end();
  }
};



 