const express = require("express");
const router = express.Router();
const config = require('../model/config');
const db= require("../model/DBhelper");
var sd = require('silly-datetime');
db.config(config);
let uid;
router.get("/",  async (req, res) => {
   //获取bid
   let bidss = req.query.bids;
   let bids=[];
   //根据，分割成数组
   bids=bidss[0].split(",");
  //获取uid
     uid = req.session.user[0].uid;
   let user=[];
   await db.select("user", {uid: uid}, res1 => {
    user[0] = res1;
  let bookinfo=[];
    for(let i=0;i<bids.length;i++)
    {
       db.select("books", {bid: bids[i]}, res2 => {
       bookinfo[i]=res2[0]
        if(i==bids.length-1){
          console.log(bookinfo)
user[1]=bookinfo;
console.log(user);
res.json(user);
        }
      });
    }
});
  });
router.get("/:bid",  async (req, res) => {
  //获取bid
    const bid = req.params.bid;
   //获取uid
      uid = req.session.user[0].uid;
    
    await db.select("user", {uid: uid}, res1 => {
       console.log(res1);
       let user=[];
      user[0] = res1;
       db.select("books", {bid: bid}, res2 => {
        user[1]=res2;
      
        res.json(user);
      });
     });
   });
   router.post("/firstchange",  async (req, res) => {
 // console.log("sdj");
  const post = req.body;
  await db.update("user", { consignee:post.buyerName,phonenumber:post.buyerPhoneNumber,address: post.detailedAdress}, {uid:uid}, res1 => {
    console.log(res1);
    });
 
  }); 
  router.post("/orderone",  async (req, res) => {
    // console.log("sdj");
     const post = req.body;
     let len=post.length;
   
var time=sd.format(new Date(), 'YYYY-MM-DD HH:mm');

     for(let i=0;i<len;i++)
     {
      uid = req.session.user[0].uid;
    await db.select("user", {uid: uid}, res1 => {
      console.log(res1);
      db.insert("orders", { date:time,status:5,grade:100,comment:"好",phonenumber:res1[0].phonenumber,
      address:res1[0].address,name:res1[0].consignee,bid:post[i].bid,bookname:post[i].bookname,sellerid:post[i].uid,
      buyerid:res1[0].uid,mid:"999",price:post[i].newprice,
    }, res2 => {
      db.update("books", {saleOrNot:1}, {bid:post[i].bid}, res3 => {
        console.log(res3);
        db.delete("cart", { uid : uid, bid : post[i].bid}, res4 => {
          //res.json({ loggedIn: true, user: req.session.user, items: books })
       })
        });
      console.log(res2);
      });
    });
     
     }
      }); 

module.exports = router;