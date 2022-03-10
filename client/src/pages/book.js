import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Redirect } from 'react-router';
import "../css/book.css"


function Book() {
  let { id } = useParams(); 
  const [Bookdata, setBook] = useState([{
    }]);
  useEffect(() => {
    axios.get(`http://localhost:3001/book/${id}`).then((response) => {
      console.log('test');
      console.log(response.data);    
      let book = [];
//实现深层拷贝，虽然不知道为啥这里的Bookdata打印出来没有变化，不过后续是变了，料想是深层拷贝影响
      book.push(response.data[0]);
      // 通过扩展运算符实现深拷贝
          setBook([...book]);
          //拷贝完毕
      console.log(book);
    

    });
  },[]);
  const onAdd = (product) => {
    console.log(id)
    axios.post(`http://localhost:3001/cart/add`,{bid: id}).then((response) => {
      alert("item added!")
      window.location.href=`http://localhost:3000/cart`
    })
  }
  return (
    <body class="book-body">
    <div class="book-big-box">      
          
            <div class="link-to-user">
            <p class="poster"><Link to={"/user/"+Bookdata[0].uid}>发布者主页</Link></p>
            </div>

            <div class="img-box">
            <img height="500" width="500" src={Bookdata[0].url} />
            </div>
            <div class="book-info-box">
            <p class="bookinfo">书名:{Bookdata[0].bookname}</p>
            <p class="bookinfo">作者:{Bookdata[0].author}</p>
            <p class="bookinfo">出版社:{Bookdata[0].publicHouse}</p>
            <p class="bookinfo">版次:{Bookdata[0].edition}</p>
            <p class="bookinfo">分类:{Bookdata[0].class}</p>
            <p class="bookinfo">新旧程度:{Bookdata[0].aging_degree}</p>
            <p class="bookinfo">原价:{Bookdata[0].oldprice}</p>
            <p class="bookinfo">现价:{Bookdata[0].newprice}</p> 
        
          </div>
          <div class="buttons">
          <Link to={"/order/"+Bookdata[0].bid}><button class="buy">购买</button></Link>
          <button onClick={onAdd} class="addcart">加入购物车</button>
            </div>
            </div>
    
    </body>
  );
  // return (
  //     <div className="book">        
  //       <div>
  //         <h2><a href="/uid">发布者:</a></h2>
  //         <h4>发布者信用分:10</h4>
  //         </div>
  //         <div>
  //           <img height="400" width="400" src={'https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/71f0/71f0eea5cc3e2d841a6639f6915834fc_0_1_300_300.jpg'}/>
  //         </div>
  //         <p>书名</p>
  //         <p>作者</p>
  //         <p>出版社</p>
  //         <p>版次</p>
  //         <p>分类</p>
  //         <p>新旧程度</p>
  //         <p>原价</p>
  //         <p>现价</p>    
  //       </div>     
  //   );
  }
  
  export default Book;