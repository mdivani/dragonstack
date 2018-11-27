const { Router } = require("express");
const DragonTable = require("../dragon/dragonTable");

const router = new Router();

router.get("/new", (req, res) => {
    const dragon = req.app.locals.engine.generation.newDragon();

    DragonTable.storeDragon(dragon)
    .then(({dragonId}) => {
        dragon.dragonId = dragonId;
        res.json({ dragon });
    })
    .catch(error => console.log(error));
});

module.exports = router;