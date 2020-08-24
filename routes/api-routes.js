const db = require("../models");

module.exports = function(app){
  
  app.get("/api/test", function(req, res) {
    res.json({Result: "OK! React can connect to the backend server."});
  });

  app.get("/api/games", function(req, res) {
    db.Game.findAll({}).then(games => res.json(games)); 
  });

}