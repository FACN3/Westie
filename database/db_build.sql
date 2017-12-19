BEGIN;

DROP TABLE IF EXISTS pictures, comments, likes cascade;

CREATE TABLE pictures (
  id SERIAL PRIMARY KEY,
  url VARCHAR NOT NULL,
  title VARCHAR(40) NOT NULL
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  pictureId INTEGER REFERENCES pictures(id),
  count INTEGER
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  pictureId INTEGER REFERENCES pictures(id),
  commentDesc VARCHAR NOT NULL,
  userName VARCHAR(40) NOT NULL
);

INSERT INTO pictures (url, title)
VALUES ('hello', 'test the title');


COMMIT;
