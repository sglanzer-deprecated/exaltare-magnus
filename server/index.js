// To use it create some files under `routes/`
// e.g. `server/routes/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };

module.exports = function(app) {
  var globSync   = require('glob').sync;
  var mocks      = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
  var proxies    = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);

  // Log proxy requests
  var morgan  = require('morgan');
  app.use(morgan('dev'));

  mocks.forEach(function(route) { route(app); });
  proxies.forEach(function(route) { route(app); });

  // Require mongodb
  var mongojs = require('mongojs');

  // Connect to the local exaltare-magnus database
  var db = mongojs('exaltare-magnus');

  // Load the stage collection from the database
  var dbStage = db.collection('stage');

  // Find all of the stages in the collection
  dbStage.find(function(err, stages) {
    console.log(stages);
  });
};
