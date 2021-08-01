CREATE TABLE dragon(
    id              SERIAL PRIMARY KEY,
    birthdate       TIMESTAMP NOT NULL,
    nickname        VARCHAR(64),
    "generationId"  INTEGER, -- force sql use of camelCase for node backEnd
    FOREIGN KEY ("generationId") REFERENCES generation(id)
);