const dbConfig = require("../configs/db_config.js");

const Sequelize = require("sequelize");
const { default: initModels } = require("./init.models.js");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
db.models = initModels(sequelize);
db.Sequelize = Sequelize;
db.sequelize = sequelize;


module.exports = db;