DROP DATABASE IF EXISTS details;

CREATE DATABASE details;

USE details;

CREATE TABLE games (
  id INT NOT NULL AUTO_INCREMENT,
  details VARCHAR(1500),
  PRIMARY KEY (id)
);

CREATE TABLE screenshots (
  id INT NOT NULL AUTO_INCREMENT,
  link VARCHAR(200),
  game_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (game_id)
    REFERENCES games(id)
);

CREATE TABLE videos (
  id INT NOT NULL AUTO_INCREMENT,
  link VARCHAR(200),
  game_id int,
  PRIMARY KEY (id),
  FOREIGN KEY (game_id)
    REFERENCES games(id)
);
