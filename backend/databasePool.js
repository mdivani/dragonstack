const { Pool } = require("pg");
const databaseConfig = require("./secrets/databseConfig");

const pool = new Pool(databaseConfig);

module.exports = pool;