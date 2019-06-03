"use strict"
const express = require("express");
const app = express();
const routes = require("./routes");

//any file with a created and configured Express app needs the next line, there are 2 underscores before dirname
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use("/api", routes);

let port = 3000;
app.listen(port, () => {
  console.log(`Server running on Port:${port}.`);
});