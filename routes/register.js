const express = require("express");
const router = express.Router();

const config = require('../model/config');
const db= require("../model/DBhelper");
const bcrypt = require("bcrypt")

db.config(config);
const saltRounds = 10

router.post("/", async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    var passwordHash = ""
    await db.select("user", {nickname: username}, res1 => {
      if(res1[0]==undefined)
      {
        bcrypt.hash(password, saltRounds, (err, hash)=>{
          if(err) {
            res.end(err)
          }else{
          passwordHash = hash
          db.insert("user", {uid: Date.now().toString(), nickname: username, pwd: passwordHash, credict: 10, url: 1111 }, res1 => {
            //console.log(res1);
            })
          res.send("注册成功！")
        }
        })
      }
      
      else{
        res.send("不可使用重复的昵称！")
      }
   
  })
 })
 module.exports = router;