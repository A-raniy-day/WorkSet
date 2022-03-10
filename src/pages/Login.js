import Axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import"../css/login.css";
Axios.defaults.withCredentials = true

function Login() {
    // const [usernameReg, setUsernameReg] = useState("")
    // const [passwordReg, setPasswordReg] = useState("")

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [loginStatus, setLoginStatus] = useState("")

    

    const login = () => {
        Axios.post("http://localhost:3001/login", {
            username: username,
            password: password,
        }).then((response)=>{
            console.log(response)
            if (response.data.message) {
                alert(response.data.message)
            } else {
                
                alert(response.data[0].nickname+"已登录！")
                window.location.href=`http://localhost:3000`;
            }
            
        })
    }
  

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            console.log(response)
            // if (response.data.loggedIn == true){
            //     setLoginStatus(response.data.user[0].nickname)
            // }
        })
    }, [])

  return (
    <body class="login-body">
    <div class="login-div">      
          <p class="title">登录</p>
          <label class="info-label">账户：</label>
          <input class="input" type="text" placeholder="Username..." maxlength="20"  onChange={(e)=> setUsername(e.target.value)}/>
          <p></p>
          <label  class="info-label">密码：</label>
          <input class="input" type="password" placeholder="Password..." onChange={(e)=> setPassword(e.target.value)}/>
          <p></p>
          <button class="login-button"onClick={login}>登录</button>
      <Link to="/register" class="linktoreg">注册</Link>
      </div>

      
    
    </body>
  );
}

export default Login;