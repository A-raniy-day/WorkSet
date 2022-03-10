import Header from '../components/Header';
import Main from '../components/Main';
import Basket from '../components/Basket';
import Axios from "axios"
import { useEffect, useState } from 'react';

Axios.defaults.withCredentials = true

function Cart() {
  const [products, setProducts] = useState([])
  const [loginStatus, setLoginStatus] = useState("")
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3001/cart").then((response) => {
      if (response.data.loggedIn === true) {
        console.log(response)
        setLoginStatus(response.data.user[0].nickname)
        setProducts(response.data.items.map((x) => ({ ...x[0]})))
        setCartItems(response.data.items.map((x, i) => ({ ...x[0], qty: response.data.qty[i], selected: 0 })))
      } else {
      }
    })
  }, [])

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.bid === product.bid)
    if (exist) {
      setCartItems(cartItems.map((x) => x.bid === product.bid ? { ...exist, qty: exist.qty + 1 } : x))
      Axios.post(`http://localhost:3001/cart/update`,{bid: exist.bid, qty: exist.qty+1}).then((response) => {})
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
      Axios.post(`http://localhost:3001/cart/update`,{bid: exist.bid, qty: 1}).then((response) => {})
    }
  }

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.bid === product.bid)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.bid !== product.bid))
      Axios.post(`http://localhost:3001/cart/remove/`,{bid: exist.bid}).then((response) => {})
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.bid === product.bid ? { ...exist, qty: exist.qty - 1 } : x
        )
      )
      Axios.post(`http://localhost:3001/cart/update`,{bid: exist.bid, qty: exist.qty-1}).then((response) => {})
    }
  }
  const onCheck = (product) => {
    const exist = cartItems.find((x) => x.bid === product.bid)
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.bid === product.bid ? { ...exist, selected: exist.selected = !exist.selected } : x
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }

  return (
    <div className="cartt">
      <div className="cartt1">
        <div className="cartt2">
      <Header countCartItems={cartItems.length} headerText={loginStatus+"'s Shopping Cart"} ></Header>
      <div className="row">
        <Main onAdd={onAdd} products={products}></Main>
        <Basket onAdd={onAdd} onRemove={onRemove} onCheck={onCheck} cartItems={cartItems}></Basket>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Cart
