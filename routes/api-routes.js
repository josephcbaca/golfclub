const db = require("../models");

module.exports = function (app) {

  app.get("/api/test", function (req, res) {
    res.json({ Result: "OK! React can connect to the backend server." });
  });

  app.get("/api/games", function (req, res) {
    db.Game.findAll({
      include: [{
        as: 'host',
        model: db.Player,
        attributes: ['id', 'userName']
      }, {
        as: 'player_1',
        model: db.Player,
        attributes: ['id', 'userName']
      }, {
        as: 'player_2',
        model: db.Player,
        attributes: ['id', 'userName']
      }, {
        as: 'player_3',
        model: db.Player,
        attributes: ['id', 'userName']
      }
      ],
      attributes: ['id', 'gameTime', 'golfCourse']
    }).then(games => res.json(games));
  });

  app.post("/api/newgame", function (req, res) {
    if (!req.user) {
      res.json({ msg: "Not logged in!" });
    } else {
      db.Game.create({
        gameTime: req.body.gameTime,
        host_id: req.user.id,
        golfCourse: req.body.golfCourse
      }).then(newGame => res.json(newGame));
    }
  });

  app.put("api/joingame", function (req, res) {
    // for actuall put request, req.body needs: 
    // id(game id), user_id, slot_number (the id of empty player slot, e.g. player_id_2, player_id_3)

    if (!req.user) {
      res.json({ msg: "Not logged in!" });
    } else {
      // e.g if req.body.slot_number is "player_id_2"
      // pubBody will be {player_id_2: user_id}
      const putBody = {};
      putBody[req.body.slot_number] = req.user.id;

      db.Game.update(pubBody, {
        where: {
          id: req.body.id
        }
      }).then(result => res.json(result))
    }
  });
}

//Sign Up Create User POST
//Keep in mind sessions - keep you in session while logged in

//Select User GET

//Create Game POST √
//Will need to GET from current logged in session 

//Join Game PUT √