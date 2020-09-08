const express = require("express");
//const passport = require("./config/passport");
const morgan = require('morgan')
const app = express();

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;
const db = require('./models');

// Define middleware here
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const passport = require("./config/passport");
const compression = require("compression")
const session = require("express-session");

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(compression());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Start the API server
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  })
});
