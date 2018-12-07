CREATE TABLE dragonTrait(
    "traitId" INTEGER REFERENCES trait (id),
    "dragonId" INTEGER  REFERENCES dragon (id)
);