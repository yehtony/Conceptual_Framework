module.exports = (sequelize, Sequelize) => {
  const Activity = sequelize.define('sprint', {
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
    project_stage_id: {
      type: Sequelize.INTEGER,
    },
    // indexes: [
    //   {
    //     unique: true,
    //     fields: ['stage', 'project_stage_id'],
    //   },
    // ],
  });
  return Activity;
};
