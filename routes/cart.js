const express = require("express");
const router = express.Router();

const config = require('../model/config');
const db= require("../model/DBhelper");
const { response } = require("express");


db.config(config);

router.get("/", async (req, res) => {
    if (req.session.user) {
        user_id = req.session.user[0].uid
        await db.select("cart", {uid: user_id}, async res1 => {
            //console.log(res1)
            var qtyList = []
            const books = await res1.reduce(async (memo, x) => {
                const results = await memo
                const res1 = await db.select("books", { bid: x.bid})
                qtyList.push(x.qty)
                return [...results, res1]
            }, []);
            res.json({ loggedIn: true, user: req.session.user, items: books, qty: qtyList })
            //console.log(books)
         })
    } else {
        res.json({loggedIn: false})
    }
})

router.post("/update/", async (req, res) => {
    console.log("updating")
    const BID = req.body.bid
    const QTY = req.body.qty
    if (req.session.user) {
        user_id = req.session.user[0].uid
        await db.update("cart", {qty: QTY}, { uid : user_id, bid : BID}, async res1 => {
         })
    } else {
        res.json({loggedIn: false})
    }
})

router.post("/add/", async (req, res) => {
    console.log("adding")
    const BID = req.body.bid
    if (req.session.user) {
        user_id = req.session.user[0].uid
        await db.select("cart", { uid : user_id, bid : BID}, async res1 => {
            if (res1.length === 0)
            {
                await db.insert("cart", { uid : user_id, bid : BID, qty: 1}, async res2 => {
                    res.json()
                })
            } else {
                // await db.update("cart", {qty: res1[0].qty + 1}, { uid : user_id, bid : BID}, async res2 => {
                //     res.json()
                // })
                res.json()
            }
         })
    } else {
        res.json({loggedIn: false})
    }
})

router.post("/remove/", async (req, res) => {
    console.log("removing")
    const BID = req.body.bid
    if (req.session.user) {
        user_id = req.session.user[0].uid
        await db.delete("cart", { uid : user_id, bid : BID}, async res1 => {
            //res.json({ loggedIn: true, user: req.session.user, items: books })
         })
    } else {
        res.json({loggedIn: false})
    }
})

// router.post("/", async (req, res) => {
//     console.log(req.session.user)
//     if (req.session.user) {
//         console.log(req.session.user[0].uid)
//         await db.select("cart", {uid: 0}, res1 => {
//             console.log(res1[0])
//          })
//         res.json({ loggedIn: true, user: req.session.user })
//     } else {
//         res.json({loggedIn: false})
//     }
// })

module.exports = router;