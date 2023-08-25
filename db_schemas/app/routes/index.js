module.exports = (app) => {
  const user = require('./project.route');
  // eslint-disable-next-line new-cap
  const router = require('express').Router();

  router.post('/create/project', user.createProject);

  app.use('/api', router);
};
