const express = require("express");
const router = express.Router();

const config = require('../model/config');
const db= require("../model/DBhelper");
const bcrypt = require("bcrypt");
const { response } = require("express");


db.config(config);

router.get("/", (req, res)=> {
    //console.log(req.session.user)
    if (req.session.user) {
        res.json({ loggedIn: true, user: req.session.user })
    } else {
        res.json({loggedIn: false})
    }
})

router.post("/", async (req, res) => {
   const username = req.body.username
   const password = req.body.password
   await db.select("user", {nickname: username}, res1 => {
    if(res1[0]!=undefined){
        bcrypt.compare(password, res1[0].pwd, (error, response) => {
            if(response) {
                req.session.user = res1
              //  console.log(req.session.user)
                //req.session.save()
               // console.log("pass")
                res.json(res1)
            } else {
                
                res.json({ message: "Wrong username/password combination!"})
            }
        })
    }//不存在账户
    else {  
        res.json({ message: "Wrong username/password combination!"})
    }
   

    })
})

module.exports = router;