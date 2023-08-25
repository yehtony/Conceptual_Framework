/* eslint-disable camelcase */
const db = require('../models/index.js');
const task = db.task;

exports.createTask = async function(req, res) {
  const { id, name, stage, state, activity_id } = req.body;
  console.log(id, name, stage, state, activity_id);
  task.create({ id, name, stage, state, activity_id })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred',
        });
      });
};
