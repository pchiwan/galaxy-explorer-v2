const { findCluster } = require('../../src/business');
const { HTTP_OK, HTTP_NOT_FOUND } = require('../../src/constants');

module.exports = function (req, res) {
  const cluster = findCluster(req.query.clusterName);

  if (cluster) {
    res.status(HTTP_OK);
    res.json(cluster.info);
  } else {
    res.status(HTTP_NOT_FOUND);
  }
};
