/* eslint-disable camelcase */
const db = require('../models/index.js');
const activity = db.activity;

exports.createActivity = async function(req, res) {
  const { id, name, stage, state, project_stage_id } = req.body;
  console.log(id, name, stage, state, project_stage_id);
  activity.create({ id, name, stage, state, project_stage_id })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred',
        });
      });
};
