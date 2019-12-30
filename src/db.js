const fs = require('fs');
const path = require('path');
const { Cluster } = require('./models');

const JSON_FILE_PATH = path.resolve('clusters.json');

const rawdata = fs.readFileSync(JSON_FILE_PATH, 'utf8');
const json = JSON.parse(rawdata);
const db = json.map(c => new Cluster(c));

module.exports = db;
