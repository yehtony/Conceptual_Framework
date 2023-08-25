const db = require('../models/index.js');
const project = db.project;

exports.createProject = async function(req, res) {
  const { id, name, state } = req.body;
  console.log(id, name, state);
  project.create({ id, name, state})
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred',
        });
      });
};
