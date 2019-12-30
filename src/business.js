const db = require('./db');

function toLower (string) {
  return string.toLowerCase();
}

function getAllPlanets () {
  return db.reduce(
    (value, cluster) => [...value, ...getAllClusterPlanets(cluster)],
    []
  );
}

function getAllClusterPlanets (cluster) {
  return cluster.systems.reduce(
    (value, system) => [...value, ...system.planets],
    []
  );
}

function getClusters () {
  return db.map(c => c.name);
}

function findCluster (clusterName) {
  const cluster = db.find(c => toLower(c.name) === toLower(clusterName));

  return cluster || null;
}

function findSystem (clusterName, systemName) {
  const cluster = findCluster(clusterName);
  let system;

  if (cluster && cluster.nSystems) {
    system = cluster.systems.find(s => toLower(s.name) === toLower(systemName));
  }

  return system || null;
}

function findPlanet (clusterName, systemName, planetName) {
  const system = findSystem(clusterName, systemName);
  let planet;

  if (system && system.nPlanets) {
    planet = system.planets.find(p => toLower(p.name) === toLower(planetName));
  }
  return planet || null;
}

function traverseGalaxy (planetName, clusterIndex = 0) {
  if (clusterIndex === db.length) return null;

  const system = traverseCluster(planetName, db[clusterIndex]);
  return system !== null
    ? Object.assign({}, db[clusterIndex], { systems: [system] })
    : traverseGalaxy(planetName, ++clusterIndex);
}

function traverseCluster (planetName, cluster, systemIndex = 0) {
  if (systemIndex === cluster.nSystems) return null;

  const planet = traverseSystem(planetName, cluster.systems[systemIndex]);
  return planet !== null
    ? Object.assign({}, cluster.systems[systemIndex], { planets: [planet] })
    : traverseCluster(planetName, cluster, ++systemIndex);
}

function traverseSystem (planetName, system, planetIndex = 0) {
  if (planetIndex === system.nPlanets) return null;

  return toLower(system.planets[planetIndex].name) === toLower(planetName)
    ? system.planets[planetIndex]
    : traverseSystem(planetName, system, ++planetIndex);
}

function flattenGalaxy (iteratorFn) {
  return db.reduce((value, cluster) => [...value, ...iteratorFn(cluster)], []);
}

function locatePlanet (planetName) {
  const cluster = traverseGalaxy(planetName);

  if (!cluster) {
    return null;
  }

  return {
    cluster: cluster.name,
    system: cluster.systems[0].name,
    planet: cluster.systems[0].planets[0].name
  };
}

function getGasGiants () {
  return getAllPlanets().filter(planet => planet.isGasGiant);
}

module.exports = {
  findCluster,
  findPlanet,
  findSystem,
  getClusters,
  getGasGiants,
  locatePlanet
};
