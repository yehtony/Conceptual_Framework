module.exports = (sequelize, Sequelize) => {
  const Routine = sequelize.define('routine', {
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
    task_id: {
      type: Sequelize.INTEGER,
    },
    // indexes: [
    //   {
    //     unique: true,
    //     fields: ['stage', 'task_id'],
    //   },
    // ],
  });
  return Routine;
};
