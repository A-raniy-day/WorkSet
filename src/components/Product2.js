import React from 'react'
import {Link } from "react-router-dom";

export default function Product(props) {
    const {product} = props;
    return (
        <div class="every-product">
            <p></p>
            <Link to={"/book/"+product.bid} class="booknamelink">{product.bookname}</Link><label class="price-tag">${product.newprice}</label>
            <p></p>
            <div class='search-img'><img className="med" src={product.url} alt={product.bookname}></img></div>
            
        </div>
    )
}