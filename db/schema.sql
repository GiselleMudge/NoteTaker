DROP DATABASE IF EXISTS notes_db;
CREATE DATABASE notes_db;
USE notes_db;

-- Create the tables table
CREATE TABLE notes
(
  id INT NOT NULL AUTO_INCREMENT,
  note_title VARCHAR (255) NOT NULL,
  note_text VARCHAR (255) NOT NULL,
  PRIMARY KEY(id)
);