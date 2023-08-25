module.exports = (sequelize, Sequelize) => {
  const ProjectStage = sequelize.define('scrum', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    project_id: {
      type: Sequelize.INTEGER,
    },
    // indexes: [
    //   {
    //     unique: true,
    //     fields: ['stage', 'project_id'],
    //   },
    // ],
  });
  return ProjectStage;
};
