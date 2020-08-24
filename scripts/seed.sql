USE golf_db;

INSERT INTO player(userName, email, pass) VALUES ("user1", "email1@mail.com", "1234");
INSERT INTO player(userName, email, pass) VALUES ("user2", "email2@mail.com", "1234");
INSERT INTO player(userName, email, pass) VALUES ("user3", "email3@mail.com", "1234");
INSERT INTO player(userName, email, pass) VALUES ("user4", "email4@mail.com", "1234");
INSERT INTO game(gameTime, host_id, player_id_1, player_id_2, player_id_3, golfCourse) VALUES (NOW(), 1,2,3,4, "Bellevue Golf Course");