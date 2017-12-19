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
VALUES ('https://media1.giphy.com/media/Yjc9l1Q6Al1DO/giphy.gif', 'broccoli'),
('https://media0.giphy.com/media/qpP7VsPNeBtpC/giphy.gif','fail'),
('https://media2.giphy.com/media/DCy2dnXPeGsO4/giphy.gif', 'sleep'),
('https://media1.giphy.com/media/l378p0VvTts3st2RG/giphy.gif', 'ears'),
('https://media0.giphy.com/media/WLbtNNR5TKJBS/giphy.gif', 'yummy'),
('https://media2.giphy.com/media/mCRJDo24UvJMA/giphy.gif', 'coding'),
('https://media0.giphy.com/media/nrN8fUJ4EZn5m/giphy.gif','shower'),
('https://media1.giphy.com/media/S2S0ZDytY6yDm/giphy.gif','wtf'),
('https://media0.giphy.com/media/DvyLQztQwmyAM/giphy.gif','confused'),
('https://media2.giphy.com/media/aBfSGPDRDSdqw/giphy.gif','driving'),
('https://media3.giphy.com/media/RQSuZfuylVNAY/giphy.gif','superdog');

COMMIT;
