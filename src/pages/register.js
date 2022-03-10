import Axios from "axios"
import {  useState } from "react";
import"../css/login.css";


Axios.defaults.withCredentials = true

function Register() {
    const [usernameReg, setUsernameReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")
    const register = () => {
        Axios.post("http://localhost:3001/register", {
            username: usernameReg,
            password: passwordReg,
        }).then((response)=>{
            alert(response.data)
            if(response.data=="不可使用重复的昵称！")
            {

            }
            else{
                window.location.href=`http://localhost:3000/login`;
            }
        })
    }


    return (
        <body class="login-body">
        <div class="login-div">   
      
        
        <p class="title">注册</p>
          <label  class="info-label">账户：</label>
          <input class="input" type="text" maxlength="20" onChange={(e)=> setUsernameReg(e.target.value)}/>
          <p></p>
          <label  class="info-label">密码：</label>
          <input class="input" type="password" onChange={(e)=> setPasswordReg(e.target.value)}/>
          <p></p>
          <button class="login-button"onClick={register}>注册</button>
          <p></p>
      
    
      </div>
      </body>
    );
  }
  
  export default Register;