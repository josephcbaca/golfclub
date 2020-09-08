require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.DB_USERNAME || "root",
    "password": process.env.DB_PASSWORD || '',
    "database": process.env.DB_DATABASE || "golfclub_development",
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "use_env_variable": "JAWSDB_URL"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL"
  }
}