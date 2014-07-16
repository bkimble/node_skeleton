module.exports = function(app){
  app.get('/', function (req, res) {
    var sitename = config.app.sitename; // demonstrating config vars
    res.end('Node is working for ' + sitename + ' !')
  })
  
  // Smaller groups of routes here.
  var users = require("./users")(app);
};

