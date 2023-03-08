// app.js : express server
const express = require("express");
const logger = require("morgan");
const port = 3000;

const app = express();

app.use(logger("dev"));

app.get("/", async (req, res, next) => {
    const pid = process.pid;
    const instance_number = process.env.NODE_APP_INSTANCE;
    console.log(`${pid} is pm2 instance_number : ${instance_number}`);

    res.send(instance_number);
});

app.get("/status", async (req, res, next) => {
    const pid = process.pid;
    const instance_number = process.env.NODE_APP_INSTANCE;
    console.log(`${pid} is pm2 instance_number : ${instance_number}`);

    res.send(instance_number);
});

app.listen(port, () => {
    process.send("ready");
    console.log(`application is listening on port ${port}`);
});
