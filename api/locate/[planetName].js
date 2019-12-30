const { locatePlanet } = require('../../src/business');
const { HTTP_OK, HTTP_NOT_FOUND } = require('../../src/constants');

function getPath (clusterName, systemName, planetName) {
  const clusterPath = `/api/clusters/${clusterName}`;
  if (!systemName) {
    return clusterPath;
  }

  const systemPath = `${clusterPath}/systems/${systemName}`;
  if (!planetName) {
    return systemPath;
  }

  return `${systemPath}/planets/${planetName}`;
}

module.exports = function (req, res) {
  const path = locatePlanet(req.query.planetName);

  if (path) {
    const result = [
      `<a href="${getPath(path.cluster)}">${path.cluster}</a>`,
      `<a href="${getPath(path.cluster, path.system)}">${path.system}</a>`,
      `<a href="${getPath(
        path.cluster,
        path.system,
        path.planet
      )}">${path.planet}</a>`
    ].join(' ==> ');

    res.status(HTTP_OK);
    res.send(result);
  } else {
    res.status(HTTP_NOT_FOUND);
  }
};
