const db = require("../models");

module.exports = function(app){
  
  app.get("/api/test", function(req, res) {
    res.json({Result: "OK! React can connect to the backend server."});
  });

  app.get("/api/games", function(req, res) {
    db.Game.findAll({
      include: [{
          as: 'host',
          model: db.Player,
          attributes: ['id', 'userName']
        },{
          as: 'player_1',
          model: db.Player,
          attributes: ['id', 'userName']
        },{
          as: 'player_2',
          model: db.Player,
          attributes: ['id', 'userName']
        },{
          as: 'player_3',
          model: db.Player,
          attributes: ['id', 'userName']
        }
      ],
      attributes: ['id', 'gameTime','golfCourse']
    }).then(games => res.json(games)); 
  });

}

//Sign Up Create User POST
//Keep in mind sessions - keep you in session while logged in

//Select User GET

//Create Game POST
//Will need to GET from current logged in session

//Join Game PUT