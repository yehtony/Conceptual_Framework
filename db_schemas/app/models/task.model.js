module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define('task', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true, // If you want the ID to auto-increment
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    stage: {
      type: Sequelize.INTEGER,
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    activity_id: {
      type: Sequelize.INTEGER,
    },
    // indexes: [
    //   {
    //     unique: true,
    //     fields: ['stage', 'activity_id'],
    //   },
    // ],
  });
  return Task;
};
