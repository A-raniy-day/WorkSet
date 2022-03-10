const express = require("express");
const router = express.Router();

const config = require('../model/config');
const db= require("../model/DBhelper");

db.config(config);

router.get("/",  async (req, res) => {
   //await db.select("books", { bookname: req.query.q}, res1 => {
   await db.select1("books", { bookname: req.query.q,saleOrNot:"0"}, res1 => {
      console.log(res1)
      res.json(res1);
    });
});
router.get("/filter",  async (req, res) => {
   //await db.select("books", { bookname: req.query.q}, res1 => {
   if(req.query.q!=="!")
   await db.select("books", { class: req.query.q}, res1 => {
      console.log(res1)
      res.json(res1);
    });
    else
    db.select1("books", {saleOrNot:"0"}, res1 => {
      console.log(res1)
      res.json(res1);
    });
});

module.exports = router;