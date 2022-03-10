const express = require("express");
const router = express.Router();

const config = require('../model/config');
const db= require("../model/DBhelper");

db.config(config);

router.get("/:uid",  async (req, res) => {
   const uid = req.params.uid; 
  await db.select("user", {uid: uid}, res1 => {
     console.log(res1);
     var user = res1;
     console.log(user);
     res.json(user);
    });


  });

  router.get("/AllOrders/:uid",  async (req, res) => {
    const uid = req.params.uid;
    console.log(uid)
    await db.select_or("orders", { sellerid: uid, buyerid: uid}, res1 => {
       console.log(res1);
       var sellorders = res1;
       console.log(sellorders);
       res.json(sellorders);
     });  
   });

  router.post("/:uid", async (req, res) => {
    const uid = req.params.uid;
    const post = req.body;
    await db.update("user", { consignee:post.buyerName,phonenumber:post.buyerPhoneNumber,address: post.detailedAdress,idnumber:post.idnumber,name:post.name}, {uid:uid}, res1 => {
      console.log(res1);
    });
    // await Posts.create(post);
    // res.json(post);
});
module.exports = router;