import React from 'react';
import Product from './Product2';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default function Basket(props) {
    var selected = []
    const { cartItems, onAdd, onRemove, onCheck } = props;
    cartItems.map((item)=>(item.selected?selected.push(item.bid):0))
    const itemsPrice = cartItems.length>0?cartItems.reduce((a, c) => (a + c.newprice * c.qty * c.selected) , 0):0
    return <aside className="block-2 col-1 center">
        <h2>Cart Items</h2>
        <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
        {cartItems.map((item) => (
            <div key={item.bid} className="row">
                <Product key={item.bid} product={item} onAdd={onAdd}></Product>
                <div className="col-2 text-left">
                    <input class="largerCheckbox" type="checkbox" onChange={() => onCheck(item)} className="Select"></input>
                </div>
                <div className="col-2 text-right">
                    <div>
                        {item.qty} x ${item.newprice}
                    </div>
                    <button onClick={() => onRemove(item)} className="remove">
                        -
                    </button>
                </div>
            </div>
        ))}
        {cartItems.length !== 0 && (
            <>
                <hr></hr>
                <div className="col-2">Items Price</div>
                <div className="col1 text-right">${itemsPrice}</div>
                <hr/>
                <div className="row">
                    <Link to={"/order/orders/"+selected}>
                        <button class="buybutton">
                            购买
                        </button>
                    </Link>
                </div>
            </>
        )}
    </aside>
}