import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../css/user.css"





function User() {
  let { uid } = useParams(); 
  const [Userdata, setUser] = useState([{
    }]);
  useEffect(() => {
    axios.get(`http://localhost:3001/user/${uid}`).then((response) => {
      console.log('test');
      console.log(response.data);    
      let user = [];
      user.push(response.data[0]);      
      setUser([...user]);
      console.log(user);
    });
  },[]);
  const [Bookdata, setbook] = useState([{
  }]);
  useEffect(() => {
    axios.get(`http://localhost:3001/book/byUser/${uid}`).then((response) => {

      console.log(response.data);    
      let book = [];
      book.push(response.data);      
      setbook([...book[0]]);
      console.log(Bookdata);
    });
  },[]);

  return (
    
    <body class="user-body">
    
    <div class="user-all">
      <div class="info-box">
      <div class="name">{Userdata[0].nickname+"的个人主页"}</div>     
      <p class="credit">信用分：{Userdata[0].credict}</p>     
      <p class="other"><Link to={"/userinfo/"+Userdata[0].uid}>查看个人资料</Link></p>
   
      
      <p class="other"><Link to={"/user/AllOrders/"+Userdata[0].uid}>历史订单</Link></p>        
      
      
      <p class="other"><Link to={"/user/postBook/"+Userdata[0].uid}>发布二手书</Link> </p>        
      
      </div>
      
      <p class="title">历史发布</p>
      <div class="all-post-book">{Bookdata.map((value, key) => {
      return (
      <div class="post-book">
      <div class="post-img-div"> <img src={value.url} class="post-img" ></img></div>
      <p class="bookname"><Link to={"/book/"+value.bid}>{value.bookname}</Link></p>
      <label>{value.author}</label>
      <span>￥{value.newprice}</span> <span class="edit"><Link to={"/user/editBook/"+Userdata[0].uid+"/"+value.bid}>编辑</Link></span>
      
  </div>
  

       
      );
    })}</div>    
    </div> 
    </body>
    
      
   
    
    
  


  );
  }
  
  export default User;