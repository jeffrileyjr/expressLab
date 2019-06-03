"use strict";
const express = require("express");
const cartItems = require('./cartItems')
const itemRoutes = express.Router();


itemRoutes.get("/cart-items", (req, res) => {
  console.log(cartItems);
  res.json(cartItems);
});

itemRoutes.post("/cart-items", (req, res) => {
  console.log(req.body);
  cartItems.push(req.body);
  res.json(cartItems);
});

itemRoutes.delete("/cart-items/:id", (req, res) => {
  console.log(req.params.id);
  cartItems.splice(cartItems.findIndex(element => element.id == req.params.id), 1);
  res.json(cartItems);
});
itemRoutes.put("/cart-items/:id", (req, res) => {
  console.log(req.params.id);
  cartItems.splice(cartItems.findIndex(element => element.id == req.params.id), 1, req.body);
  res.json(cartItems);
});

module.exports = itemRoutes;