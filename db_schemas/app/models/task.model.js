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
  Task.beforeValidate((task, options) => {
    task.stage = ['planning', 'implementation', 'rewiew', 'retrospect'].indexOf(task.name) + 1;
  });
  return Task;
};
