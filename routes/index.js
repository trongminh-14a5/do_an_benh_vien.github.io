const newsRouter = require('./news');
const coursesRouter = require('./courses');
const SiteRouter = require('./sites');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/courses', coursesRouter);
  app.use('/', SiteRouter);
}

module.exports = route;