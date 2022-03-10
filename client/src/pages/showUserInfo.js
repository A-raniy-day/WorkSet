import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../css/user_info.css"


function ShowUserInfo() {
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

  return (
    <body class="user-info-body">
    <div class="user-info-box">
      <p class="personal-info">个人资料</p>  
      <p class="basic-info">真实姓名：{Userdata[0].name}</p>
      <p class="basic-info">身份证号：{Userdata[0].idnumber}</p>
      <p class="basic-info">电话：{Userdata[0].phonenumber}</p>
      <p class="basic-info">收货姓名：{Userdata[0].consignee}</p>   
      <p class="basic-info">收货地址：{Userdata[0].address}</p> 
      
        <p class="link-eidt"><Link to={"/edituserinfo/"+Userdata[0].uid}>修改个人资料</Link></p>
      
      
          
    </div>
    </body>
  );
  }
  
  export default ShowUserInfo;

