class Planet {
  constructor (data) {
    this.name = data.name;
    this.dayLength = data.dayLength;
    this.orbitalPeriod = data.orbitalPeriod;
    this.orbitalDistance = data.orbitalDistance;
    this.temp = data.temp;
    this.radius = data.radius;
  }

  get isGasGiant () {
    return this.temp === 'N/A';
  }
}

class System {
  constructor (data = {}) {
    this.name = data.name;
    this.stellarMass = data.stellarMass;
    this.stellarClass = data.stellarClass;
    this.massRelay = !!data.massRelay;
    this.planets = data.planets.map(planet => new Planet(planet));
  }

  get info () {
    return {
      name: this.name,
      stellarMass: this.stellarMass,
      stellarClass: this.stellarClass,
      hasMassRelay: this.massRelay,
      planets: this.nPlanets
    };
  }

  get nPlanets () {
    return this.planets.length;
  }
}

class Cluster {
  constructor (data = {}) {
    this.name = data.name;
    this.systems = data.systems.map(system => new System(system));
  }

  get info () {
    return {
      name: this.name,
      systems: this.nSystems
    };
  }

  get nSystems () {
    return this.systems.length;
  }
}

module.exports = {
  Cluster,
  Planet,
  System
};
