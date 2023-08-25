const config = require('../config/db.config.js'); // 引入資料庫連結設定檔
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  // 由資料庫連結設定檔的設定值來備置 Sequelize
  host: config.HOST,
  dialect: config.DIALECT,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.project = require('./project.model.js')(sequelize, Sequelize);
db.project_stage = require('./project_stage.model.js')(sequelize, Sequelize);
db.activity = require('./activity.model.js')(sequelize, Sequelize);
db.task = require('./task.model.js')(sequelize, Sequelize);
db.routine = require('./routine.model.js')(sequelize, Sequelize);

db.project.hasMany(db.project_stage, {
  foreignKey: 'project_id',
  targetKey: 'id',
});

db.project_stage.hasMany(db.activity, {
  foreignKey: 'project_stage_id',
  targetKey: 'id',
});

db.activity.hasMany(db.task, {
  foreignKey: 'activity_id',
  targetKey: 'id',
});

db.task.hasMany(db.routine, {
  foreignKey: 'task_id',
  targetKey: 'id',
});

db.ROLES = ['user', 'admin', 'moderator'];
module.exports = db;
