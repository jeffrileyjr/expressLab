"use strict"
const { Pool } = require("pg");

const credentials ={
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "ExpressShopDB",  //this is the name of the database we want to communicate with
  ssl: false
};

module.exports = new Pool(credentials);