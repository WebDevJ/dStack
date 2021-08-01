-- names always singular never plural
CREATE TABLE generation(
    id          SERIAL PRIMARY KEY,
    expiration  TIMESTAMP NOT NULL
);