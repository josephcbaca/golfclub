module.exports = function (sequelize, DataTypes) {
    let Game = sequelize.define("Game", {
        gameTime: {
            type: DataTypes.DATE,
            allowNull: false
        },
        golfCourse: {
            type: DataTypes.STRING,
            allowNull: false
        }

    })

    Game.associate = function (models) {

        Game.belongsTo(models.Player, {
            as: 'host',
            foreignKey: 'host_id'
        });
        Game.belongsTo(models.Player, {
            as: 'player_1',
            foreignKey: 'player_id_1'
        });
        Game.belongsTo(models.Player, {
            as: 'player_2',
            foreignKey: 'player_id_2'
        });
        Game.belongsTo(models.Player, {
            as: 'player_3',
            foreignKey: 'player_id_3'
        });
    }
    return Game;
}