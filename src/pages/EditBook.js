import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../css/postbook.css"





function EditBook() {
 
    //在修改信息时仍然有原来的信息
    let { uid,bid } = useParams(); 
    const [Bookdata, setBook] = useState([{
    }]);
   useEffect(() => {
    axios.get(`http://localhost:3001/book/${bid}`).then((response) => {

      console.log(response.data);    
      let book = [];
      book.push(response.data[0]);   
          setBook([...book]);

    });
  },[]);
    


  const onClick=()=>{
    
    
    let bookinfo ={
      bookname:document.getElementById("getname").value,
      class: document.getElementById("getclass").value,
      aging_degree:document.getElementById("getagingdegree").value,
      oldprice: document.getElementById("getoldprice").value,
      newprice: document.getElementById("getnewprice").value,
      publicHouse: document.getElementById("getpublichouse").value,
      edition: document.getElementById("getedition").value,
      url: document.getElementById("geturl").value,
      author: document.getElementById("getauthor").value,
      saleOrNot: Bookdata[0].saleOrNot,
      bid: Bookdata[0].bid,
      uid: Bookdata[0].uid}


      if(bookinfo.bookname==""||bookinfo.class==""||bookinfo.aging_degree==""||bookinfo.oldprice==""||bookinfo.newprice==""||bookinfo.publicHouse==""||bookinfo.edition==""||
      bookinfo.url==""||bookinfo.author==""){
        
        alert( "请完善所有信息！")
        

      }else{
      console.log(bookinfo)
      axios.post(`http://localhost:3001/book/edit/${uid}/${bid}`, bookinfo).then((response) => {
        alert(response.data)
        window.location.href=`http://localhost:3000/user/${uid}`;
    
    });
  }

  }


 

  return (
    <body class="postbody">
    <div className="postBook">
      <p class="postinfo">书名：</p><input class="inputinfo" id="getname" defaultValue={Bookdata[0].bookname} ></input>
      <p class="postinfo">作者：</p><input class="inputinfo" id="getauthor"  defaultValue={Bookdata[0].author}></input>
      <p class="postinfo">出版社：</p><input class="inputinfo" id="getpublichouse" defaultValue={Bookdata[0].publicHouse}></input>
      <p class="postinfo">版次：</p><input class="inputinfo" id="getedition" defaultValue={Bookdata[0].edition}></input>
      <p class="postinfo">分类：</p>
      <select id="getclass" class="inputclass"  >
				<option value="">请选择书籍分类</option>
				<option value="教材">教材</option>
				<option value="成功/励志">成功/励志</option>
				<option value="文艺">文艺</option>
				<option value="童书">童书</option>
				<option value="人文社科">人文社科</option>
        <option value="生活">生活</option>
        <option value="经营">经营</option>
        <option value="教育">教育</option>
        <option value="科技">科技</option>
        <option value="青春文学">青春文学</option>
        <option value="名著/小说">名著/小说</option>
        <option value="期刊报纸">期刊报纸</option>
			</select>

      <p class="postinfo">新旧程度：</p><input class="inputinfo" id="getagingdegree" defaultValue={Bookdata[0].aging_degree}></input>
      <p class="postinfo">原价：</p><input class="inputinfo" id="getoldprice" defaultValue={Bookdata[0]. oldprice}></input>
      <p class="postinfo">现价：</p><input class="inputinfo" id="getnewprice" defaultValue={Bookdata[0].newprice}></input>
      <p class="postinfo">上传书籍封面：</p><input class="inputinfo" id="geturl" defaultValue={Bookdata[0].url}></input>
      
      <p></p>
      <button class="postbutton" onClick={onClick}>修改</button>

      
</div>
</body>
  );
}
  
  export default EditBook;