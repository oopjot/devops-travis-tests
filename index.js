const { json } = require("express");
const express = require("express");

const app = express();

app.use(json);

app.get("/", (req, res) => res.send("Hello world!"));

app.post("/:text", (req, res) => res.send(`You've posted ${req.params.text}`));

app.put("/:text", (req, res) => res.json(`You've put ${req.params.text}`));

app.delete("/:text", (req, res) => res.json(`You've deleted ${req.params.text}`));


app.listen(5000, () => console.log("Slucham Ciebie na 5000"));


module.exports = app;