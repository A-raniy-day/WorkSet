const express = require("express");
const router = express.Router();

const db =require("../model/DBhelper")



router.get("/:id",  async (req, res) => {
   const id = req.params.id;
   await db.select("books", { bid: id}, res1 => {
      console.log(res1);
      var book = res1;
      console.log(book);
      res.json(book);
    }); 
  });

  router.get("/byUser/:uid",  async (req, res) => {
    const uid = req.params.uid;
    await db.select("books", { uid: uid}, res1 => {
       console.log(res1);
       var book = res1;
       console.log(book);
       res.json(book);
     });


});
  router.post("/:uid", async (req, res) => {
    const info = req.body;
    const uid = req.params.uid;
    console.log(info)
    await db.insert("books", { bookname:info['bookname'], class:info['class'],aging_degree:info['aging_degree'],oldprice:info['oldprice'],newprice:info['newprice']
  ,publicHouse:info['publicHouse'],edition:info['edition'],author:info['author'],url:info['url'],saleOrNot:0, uid:uid}, res1 => {
    console.log(res1);
    res.end('发布成功');
    });
    // await Posts.create(post);
    // res.json(post);
});
router.post("/edit/:uid/:bid", async (req, res) => {
  const info = req.body;
  const uid = req.params.uid;
  const bid = req.params.bid;
  console.log(info)
  await db.update("books", { bookname:info['bookname'], class:info['class'],aging_degree:info['aging_degree'],oldprice:info['oldprice'],newprice:info['newprice']
  ,publicHouse:info['publicHouse'],edition:info['edition'],author:info['author'],url:info['url']}, {uid:uid, bid:bid}, res1 => {
  console.log(res1);
  res.end('修改成功');
  });
  // await Posts.create(post);
  // res.json(post);
});






// router.post("/", async (req, res) => {
//   // const post = req.body;
//   // await Posts.create(post);
//   // res.json(post);
// });


module.exports = router;
