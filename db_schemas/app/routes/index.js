module.exports = (app) => {
  const project = require('./project.route.js');
  const projectStage = require('./project_stage.route.js');
  const activity = require('./activity.route.js');
  const task = require('./task.route.js');
  const routine = require('./routine.route.js');
  // eslint-disable-next-line new-cap
  const router = require('express').Router();

  router.post('/create/project', project.createProject);
  router.post('/create/project_stage', projectStage.createProjectStage);
  router.post('/create/activity', activity.createActivity);
  router.post('/create/task', task.createTask);
  router.post('/create/routine', routine.createRoutine);

  app.use('/api', router);
};
