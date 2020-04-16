const { HTTP_OK } = require('../src/constants');

module.exports = function (req, res) {
  res.status(HTTP_OK);
  res.send(`
    <!DOCTYPE html>
    <html lang='en'>
      <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Document</title>
        <style>
          body {
            font-family: sans-serif;
          }
        </style>
      </head>
      <body>
        <p>Hello world! 👋</p>
      </body>
    </html>
  `);
};
