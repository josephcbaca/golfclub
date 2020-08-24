DROP DATABASE IF EXISTS golf_db;
CREATE DATABASE golf_db;
USE golf_db;

CREATE TABLE player (
    player_id int not null auto_increment,
    userName varchar (255) not null,
    email varchar(255) not null,
    pass varchar(255) not null,
    primary key(player_id)
);

CREATE TABLE game (
    game_id int NOT NULL AUTO_INCREMENT,
    gameTime datetime not null,
    host_id int not null,
    player_id_1 int,
    player_id_2 int,
    player_id_3 int,
    golfCourse varchar(255),
    PRIMARY KEY(game_id),
    FOREIGN KEY(host_id) REFERENCES player(player_id),
    FOREIGN KEY(player_id_1) REFERENCES player(player_id),
    FOREIGN KEY(player_id_2) REFERENCES player(player_id),
    FOREIGN KEY(player_id_3) REFERENCES player(player_id)
);

CREATE TABLE score (
    score_id int not null auto_increment,
    game_id int not null,
    player_id int not null,
    score int not null,
    primary key(score_id),
    FOREIGN KEY(game_id) REFERENCES game(game_id),
    FOREIGN KEY(player_id) REFERENCES player(player_id)
);