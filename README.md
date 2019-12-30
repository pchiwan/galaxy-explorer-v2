# Galaxy explorer
A galaxy exploration API implemented using Zeit Now's serverless functions

Check it out here: https://galaxy-explorer-v2.now.sh/

## Endpoints

### GET `/api/clusters/{clusterName}`
Returns the information of the given cluster.

### GET `/api/clusters/{clusterName}/systems`
Returns the names of all the systems in the given cluster.

### GET `/api/clusters/{clusterName}/systems/{systemName}`
Returns the information of the given system.

### GET `/api/clusters/{clusterName}/systems/{systemName}/planets`
Returns the names of all the planets in the given system.

### GET `/api/clusters/{clusterName}/systems/{systemName}/planets/{planetName}`
Returns the information of the given planet.

### GET `/api/locate/{planetName}`
Returns the full path to the given planet in the galaxy, i.e. `Cluster -> System -> Planet`.

E.g.:
- `/api/locate/Thessia` => _Athena Nebula -> Parnitha -> Thessia_

- `/api/locate/Earth` => _Local Cluster -> Sol -> Earth_

### GET `/api/gasgiants`
Returns a list of all the gas giants in the galaxy.

**_Note_**: Gas giants have no surface temperature, so their `temp` is set to `N/A`.
