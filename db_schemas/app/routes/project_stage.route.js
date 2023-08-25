/* eslint-disable camelcase */
const db = require('../models/index.js');
const projectStage = db.project_stage;

exports.createProjectStage = async function(req, res) {
  const { id, name, stage, state, project_id } = req.body;
  console.log(id, name, stage, state, project_id);
  projectStage.create({ id, name, stage, state, project_id })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred',
        });
      });
};
