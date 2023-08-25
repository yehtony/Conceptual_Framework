const db = require('../models/index.js');
const project = db.project;

exports.createProject = async function(req, res) {
  const { id, name } = req.body;
  console.log(id, name);
  project.create({ id, name })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred',
        });
      });
};
