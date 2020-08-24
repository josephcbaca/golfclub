module.exports = function(sequelize, DataTypes){
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
    return Game;
}