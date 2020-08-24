USE golf_db;

INSERT INTO players(userName, email, password, createdAt) VALUES ("user1", "email1@mail.com", "1234", NOW(), NOW());
INSERT INTO players(userName, email, password, createdAt, updatedAt) VALUES ("user2", "email2@mail.com", "1234", NOW(), NOW());
INSERT INTO players(userName, email, password, createdAt, updatedAt) VALUES ("user3", "email3@mail.com", "1234", NOW(), NOW());
INSERT INTO players(userName, email, password, createdAt, updatedAt) VALUES ("user4", "email4@mail.com", "1234", NOW(), NOW());
INSERT INTO game(gameTime, host_id, player_id_1, player_id_2, player_id_3, golfCourse, createdAt, updatedAt) VALUES (NOW(), NOW(), 1,2,3,4, "Bellevue Golf Course", NOW(), NOW());