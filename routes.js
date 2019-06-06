"use strict";
const express = require("express");
const cartItems = express.Router();
const pool = require('./pg-connection-pool');

function selectAll(res) {
  pool.query("select * from ShoppingCart order by id").then(result => res.json(result.rows));
}


cartItems.get("/cart-items", (req, res) => {
  selectAll(res);
});


cartItems.post("/cart-items", (req, res) => {
  pool.query("INSERT INTO ShoppingCart (product, price, quantity) VALUES ($1::text, $2::money, $3::smallint)", [req.body.product, req.body.price, req.body.quantity]).then(() => {
    selectAll(res);
   });
 });

cartItems.delete("/cart-items/:id", (req, res) => {
  pool.query("delete from ShoppingCart where id=$1::int", [Number(req.params.id)]).then(() => { selectAll(res);
  });
});
cartItems.put("/cart-items/:id", (req, res) => {
  pool.query("UPDATE ShoppingCart set product=$1::text, price=$2::money, quantity=$3::smallint where id=$4::int", [req.body.product, req.body.price, req.body.quantity, Number(req.params.id)]).then(() => {
    selectAll(res);
   });
});

module.exports = cartItems;