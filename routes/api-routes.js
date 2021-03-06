const db = require("../models");
const passport = require("../config/passport");

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

  app.put("/api/joingame", function (req, res) {
    // for actuall put request, req.body needs: 
    // id(game id), user_id, slot_number (the id of empty player slot, e.g. player_id_2, player_id_3)
    console.log(req);
    if (!req.user) {
      res.json({ msg: "Not logged in!" });
    } else {
      // e.g if req.body.slot_number is "player_id_2"
      // pubBody will be {player_id_2: user_id}
      const putBody = {};
      putBody[req.body.slot_number] = req.user.id;

      db.Game.update(putBody, {
        where: {
          id: req.body.id
        }
      }).then(result => {
          db.Game.findOne({
            where: {
              id: req.body.id
            },
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
          }).then(game=> {
            res.json(game);
          })
        } 
      ).catch(err=> res.json(err));
    }
  });
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
       res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    console.log(req.body);
    db.Player.create({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password
    })
      .then(() => res.end())
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Posts a new hosted game to database
  app.post("/api/host-new-game", (req, res) => {
    console.log(req.body);
    db.Game.create({
      gameTime: req.body.gameTime,
      golfCourse: req.body.golfCourse,
      host_id: req.body.host_id,
    })
      .then(() => res.end())
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Routes for page redirection
  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res, next) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({user:null});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        user: req.user
      });
    }
  });
}
