// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function (sequelize, DataTypes) {
    var Player = sequelize.define("Player", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // The email cannot be null, and must be a proper email before creation
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        // The password cannot be null
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    // Creating a custom method for our Player model. This will check if an unhashed password entered by the Player can be compared to the hashed password stored in our database
    Player.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the Player Model lifecycle
    // In this case, before a Player is created, we will automatically hash their password
    Player.addHook("beforeCreate", function (player) {
        player.password = bcrypt.hashSync(player.password, bcrypt.genSaltSync(10), null);
    });

    Player.associate = function (models) {
        Player.hasMany(models.Game, {
            foreignKey: {
                name: 'host_id',
                allowNull: false
            }
        });
        Player.hasMany(models.Game, {
            foreignKey: {
                name: 'player_id_1',
                allowNull: true
            }
        });
        Player.hasMany(models.Game, {
            foreignKey: {
                name: 'player_id_2',
                allowNull: true
            }
        });
        Player.hasMany(models.Game, {
            foreignKey: {
                name: 'player_id_3',
                allowNull: true
            }
        });
    }

    return Player;
};
