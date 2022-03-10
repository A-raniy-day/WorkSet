import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory  } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import titleimg from "../images/logo.png";
import warning from"../images/warning2.png"
function Home() {
    //emmm我也不知道为啥会这样，只能说很神奇，反正8个都先写着就对了
    const [Bookdata, setBook] = useState([{},{},{},{},{},{},{},{}]);
  let history = useHistory();
  const [text, setText] = useState('')
    const [results, setResults] = useState([])
    const [userdata, setuid] = useState([{}]);
    const onChangeHandler = (text) => {
        setText(text)
    }
  useEffect(() => {
    axios.get("http://localhost:3001/").then((response) => {
        let book = [];
        console.log(response.data)
        if(response.data=="还没登录！！！！！")
        {
            window.location.href=`http://localhost:3000/login`;
        }
        else{
            let user = [];
            user.push(response.data[response.data.length-1]); 
            console.log(user)
            setuid(user);
            console.log(userdata)
            
            //实现深层拷贝，虽然不知道为啥这里的Bookdata打印出来没有变化，不过后续是变了，料想是深层拷贝影响
            for(let i =response.data.length-1;i>=0;i--)
            {
                //这个if语句的作用是筛去已经被购买的物品
                if(response.data[i].saleOrNot==0)
                {
                    response.data[i].bookname =  response.data[i].bookname.trim();
                    book.push(response.data[i]);     
                }
                // 通过扩展运算符实现深拷贝
            }
                      setBook([...book]);
        //  setBook(response.data);
                console.log(Bookdata);
        }
    
    });
  }, []);
  let reccomend;
  //由于推荐栏有需要判断书的本数的可能性
  //首先，小于四本
  if (Bookdata.length<4) {
    reccomend = (
      <h3></h3>
    )
  } //大于等于四本小于8本显示一行
  else if(4<=Bookdata.length && Bookdata.length<=7){
    console.log(Bookdata.length);
    reccomend = (
        <><div class="recommend" id="recommad-title">
            <span class="recommand-name">新书广场</span>
            <Link to="/search/filter/!" class="recommad-a">更多商品</Link>
            <hr class="recommad-hr"></hr>
        </div><div class="recommend-content">
                <div class="recommend-book">
                    <div class="book-img"> <img src={Bookdata[0].url} class="imgtrue"></img></div>
                    <p><Link to={"/book/"+Bookdata[0].bid}>{Bookdata[0].bookname}</Link></p>
                    <label>{Bookdata[0].author}</label>
                    <span>{Bookdata[0].newprice}</span>
                </div>
                <div class="recommend-book">
                    <div class="book-img"> <img src={Bookdata[1].url} class="imgtrue"></img></div>
                    <p><Link to={"/book/"+Bookdata[1].bid}>{Bookdata[1].bookname}</Link></p>
                    <label>{Bookdata[1].author}</label>
                    <span>￥{Bookdata[1].newprice}</span>
                </div>
                <div class="recommend-book">
                    <div class="book-img"> <img src={Bookdata[2].url} class="imgtrue"></img></div>
                    <p><Link to={"/book/"+Bookdata[2].bid}>{Bookdata[2].bookname}</Link></p>
                    <label>{Bookdata[2].author}</label>
                    <span>￥{Bookdata[2].newprice}</span>
                </div>
                <div class="recommend-book">
                    <div class="book-img"> <img src={Bookdata[3].url}  class="imgtrue"></img></div>
                    <p><Link to={"/book/"+Bookdata[3].bid}>{Bookdata[3].bookname}</Link></p>
                    <label>{Bookdata[3].author}</label>
                    <span>￥{Bookdata[3].newprice}</span>
                </div>
            </div></>
    )
  }
  else{
      //大于等于八本显示八本书
    reccomend = (
        <><div class="recommend" id="recommad-title">
            <span class="recommand-name">新书广场</span>
            <Link to="/search/filter/!" class="recommad-a">更多商品</Link>
            <hr class="recommad-hr"></hr>
        </div><div class="recommend-content">
                <div class="recommend-book">
                    <div class="book-img"> <img src={Bookdata[0].url} class="imgtrue"></img></div>
                    <p><Link to={"/book/"+Bookdata[0].bid}>{Bookdata[0].bookname}</Link></p>
                    <label>{Bookdata[0].author}</label>
                    <span>￥{Bookdata[0].newprice}</span>
                </div>
                <div class="recommend-book">
                    <div class="book-img"> <img src={Bookdata[1].url} class="imgtrue"></img></div>
                    <p><Link to={"/book/"+Bookdata[1].bid}>{Bookdata[1].bookname}</Link></p>
                    <label>{Bookdata[1].author}</label>
                    <span>￥{Bookdata[1].newprice}</span>
                </div>
                <div class="recommend-book">
                    <div class="book-img"> <img src={Bookdata[2].url} class="imgtrue"></img></div>
                    <p><Link to={"/book/"+Bookdata[2].bid}>{Bookdata[2].bookname}</Link></p>
                    <label>{Bookdata[2].author}</label>
                    <span>￥{Bookdata[2].newprice}</span>
                </div>
                <div class="recommend-book">
                    <div class="book-img"> <img src={Bookdata[3].url}  class="imgtrue"></img></div>
                    <p><Link to={"/book/"+Bookdata[3].bid}>{Bookdata[3].bookname}</Link></p>
                    <label>{Bookdata[3].author}</label>
                    <span>￥{Bookdata[3].newprice}</span>
                </div>
            </div><div class="recommend-content2">
                <div class="recommend-book2">
                    <div class="book-img"> <img src={Bookdata[4].url} class="imgtruedown"></img></div>
                    <p><Link to={"/book/"+Bookdata[4].bid}>{Bookdata[4].bookname}</Link></p>
                    <label>{Bookdata[4].author}</label>
                    <span>￥{Bookdata[4].newprice}</span>
                </div>
                <div class="recommend-book2">
                    <div class="book-img"> <img src={Bookdata[5].url} class="imgtruedown"></img></div>
                    <p><Link to={"/book/"+Bookdata[5].bid}>{Bookdata[5].bookname}</Link></p>
                    <label>{Bookdata[5].author}</label>
                    <span>￥{Bookdata[5].newprice}</span>
                </div>
                <div class="recommend-book2">
                    <div class="book-img"> <img src={Bookdata[6].url} class="imgtruedown"></img></div>
                    <p><Link to={"/book/"+Bookdata[6].bid}>{Bookdata[6].bookname}</Link></p>
                    <label>{Bookdata[6].author}</label>
                    <span>￥{Bookdata[6].newprice}</span>
                </div>
                <div class="recommend-book2">
                    <div class="book-img"> <img src={Bookdata[7].url} class="imgtruedown"></img></div>
                    <p><Link to={"/book/"+Bookdata[7].bid}>{Bookdata[7].bookname}</Link></p>
                    <label>{Bookdata[7].author}</label>
                    <span>￥{Bookdata[7].newprice}</span>
                </div>
            </div></>
    )
}

  return (
    <body>
      <div class = "all">
     <div class = "nav_all">
        <span>网罗天下图书 传承中华文明</span>
        <ul class = "nav">
        <li>
            <Link to="/login">登录/注册</Link>
        </li>
   
        <li>
        <Link to="/cart">🛒购物车</Link>
        </li>
        <li>
        <Link to={"/user/AllOrders/"+userdata[0].uid}>我的订单</Link>
        </li>
        <li>
        <Link to={"/user/"+userdata[0].uid}>个人中心</Link>
        </li>
        <li>
        <Link to="/createpost">客服</Link>
        </li>   
    </ul>
    
    </div>
    <div class = 'search'>
 <img src={titleimg}></img>
 
              </div>
              <div class="container">
                  <form class="parent">
                        <input type="text" value={text} onChange={e => onChangeHandler(e.target.value)}></input>
                        <Link to={"/search/"+text}><input type="submit" value="搜索"></input></Link>
                  </form>
              </div>
    <div class = "behind">
    
    </div>
    
    <div class = 'middle'>
        <div class = "nav-left"onmouseleave="allMouseOut()">
            <div class="menu" ></div>
        <ul>

            <li id = "red-nav-left" onmouseover="oneMouseOver()">
                <span>分类</span>
                <Link to="/search/filter/!" id = "float-nav">最新上书</Link> 
    
            </li>
            <li class = "lili" >
                <Link to="/search/filter/教材"  > 教材<span class = "array-right"></span>  </Link>
                <span class = "solidline"></span> 
    
            </li>
            
            <li class = "lili">
                <Link to="/search/filter/成功|励志" >成功|励志<span class = "array-right"></span>
                    <span class = "solidline"></span> 
                </Link>
            </li>
            <li class = "lili">
                <Link to="/search/filter/文艺" >
                    文艺
                    <span class = "array-right"></span><span class = "solidline"></span> 
                </Link>
            </li>
            <li class = "lili">
                <Link to="/search/filter/童书" >童书 <span class = "array-right"></span><span class = "solidline"></span> </Link>
            </li>
            <li class = "lili">
                <Link to="/search/filter/人文">人文社科 <span class = "array-right"></span><span class = "solidline"></span> </Link>
            </li>
            <li class = "lili">
                <Link to="/search/filter/生活" >生活 <span class = "array-right"></span><span class = "solidline"></span> </Link>
            </li>
            <li class = "lili">
                <Link to="/search/filter/经管">经管 <span class = "array-right"></span><span class = "solidline"></span> </Link>
            </li>
            <li class = "lili">
                <Link to="/search/filter/教育">教育 <span class = "array-right"></span><span class = "solidline"></span> </Link>
            </li>
            <li class = "lili">
                <Link to="/search/filter/科技">科技 <span class = "array-right"></span><span class = "solidline"></span> </Link>
            </li>
            <li class = "lili">
                <Link to="/search/filter/文学">青春文学 <span class = "array-right"></span><span class = "solidline"></span> </Link>
            </li>
            <li class = "lili">
                <Link to="/search/filter/小说">名著/小说 <span class = "array-right"></span><span class = "solidline"></span> </Link>
            </li>
            <li class = "lili">
                <Link to="/search/filter/期刊">期刊/报纸 <span class = "array-right"></span><span class = "solidline"></span> </Link>
            </li>
        </ul>
        </div>    
        <div class = "middle-right">  
        <img src={warning} id='warninggg'></img>    
        </div>
    </div>
    {reccomend}
</div>
    </body>
  );
}

export default Home;
