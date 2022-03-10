import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { validateYupSchema } from "formik";
import "../css/allOrders.css"


function AllOrders() {
  let { uid } = useParams(); 
  //查找用户信息，保持顶部的个人信息还在
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
    
  //根据uid查找买或者卖的订单
  const [Orderdata, setOrder] = useState([{
    }]);
  useEffect(() => {
    axios.get(`http://localhost:3001/user/AllOrders/${uid}`).then((response) => {
      console.log(response.data);    
      let orders = [];     
      orders.push(response.data);  
      setOrder([...orders[0]]);
      console.log(orders[0]);
      //这样可以把所有的data一次性存到useState中
    });
  },[]);






  return (
    <body class="all-orders-body">
    <div class="big-box">
    
    <div class="topinfo">
    <p class="order-username">{Userdata[0].nickname}</p>     
    <p class="order-usercredit">信用分：{Userdata[0].credict}</p>
    <p class="link-eidtinfo"><Link to={"/userinfo/"+Userdata[0].uid}>查看个人资料</Link></p>  
    </div>  
   
    <div class="allorders">
    {Orderdata.map((value, key) => {
        return (
          <div class="eachorder">
           <p className="info">订单号：{value.orderid} </p>
            <p className="info">书名：{value.bookname} </p>
            <p className="info">价钱：{value.price}</p>
            <p className="info">买家账号：{value.buyerid}</p>
            <p className="info">卖家账号：{value.sellerid}</p>
            <p className="info">订单状态：{value.status}</p>
          </div>
        );
      })}
      </div>

    </div> 
    
    </body>
          
  
  );
  }
  
  export default AllOrders;