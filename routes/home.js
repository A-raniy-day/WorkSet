const express = require("express");
const router = express.Router();

const config = require('../model/config');
const db= require("../model/DBhelper");
const { response } = require("express");

db.config(config);

// router.get("/",  async (req, res) => {
//     //const id = req.params.id;
    
//     db.select("books").then(res1 => {
//         //传递信息
//        var book = res1;
//        res.json(book);
//       });
//   });
  router.get("/", async (req, res) => {
    db.select("books").then(res1 => {
        //传递信息
       var book = res1;
       if (req.session.user) {
        user_id = req.session.user[0].uid;
        console.log(user_id)
        var uid={uid:user_id}
        book[book.length]=uid;
        res.json(book);
    }
      else{
        res.json("还没登录！！！！！")
      }
       
      });
})
module.exports = router;