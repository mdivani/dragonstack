const express = require("express");
const cors = require("cors");
const GenerationEngine = require("./generation/generationEngine");
const dragonRouter = require("./api/dragon");
const generationRouter = require("./api/generation");

const app = express();
const engine = new GenerationEngine();

app.locals.engine = engine;

app.set('port', process.env.PORT || 3001);

app.use(cors({
    origin: "http://localhost:3000"
}));
app.use("/dragon", dragonRouter);
app.use("/generation", generationRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        type: "error",
        message: err.message
    });
});

engine.start();

module.exports = app;
