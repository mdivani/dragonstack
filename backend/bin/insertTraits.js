const pool = require("../databasePool");
const TRAITS = require("../data/traits.json");

TRAITS.forEach( (TRAIT) => {
    const traitType = TRAIT.type;
    const traitValues = TRAIT.values;

    traitValues.forEach((traitvalue) => {
        pool.query(
            'INSERT INTO trait("traitType", "traitValue") VALUES($1, $2) RETURNING id',
            [traitType, traitvalue],
            (error, response) => {
                if (error) return console.log(error);

                const traitId = response.rows[0].id;

                console.log(`Inserted trait with - id: ${traitId}`);
            }
        );
    })
});