CREATE TABLE dragon(
    id              SERIAL PRIMARY KEY,
    birthdate       TIMESTAMP NOT NULL,
    nickname        VARCHAR(64),
    "generationID"  INTEGER, -- force sql use of camelCase for node backEnd
    FOREIGN KEY ("generationID") REFERENCES generation(id)
);