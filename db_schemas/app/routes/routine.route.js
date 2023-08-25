/* eslint-disable camelcase */
const db = require('../models/index.js');
const routine = db.routine;

exports.createRoutine = async function(req, res) {
  const { id, name, type, stage, state, task_id } = req.body;
  console.log(id, name, type, stage, state, task_id);
  routine.create({ id, name, type, stage, state, task_id })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred',
        });
      });
};
