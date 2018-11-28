CREATE TABLE dragonTrait(
    "traitId" INTEGER,
    "dragonId" INTEGER,
    FOREIGN KEY("traitId") REFERENCES traid(id),
    FOREIGN KEY("dragonId") REFERENCES dragon(id),
)