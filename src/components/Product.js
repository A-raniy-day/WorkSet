import React from 'react'

export default function Product(props) {
    const {product, onAdd} = props;
    return (
        <div>
            <div></div>
            <h3>{product.name}</h3>
            <img className="med" src={product.image} alt={product.name}></img>
            {/* <div>${product.price}</div>
            <div>
                <button onClick={()=> onAdd(product)} >Add To Cart</button>
            </div> */}
        </div>
    )
}
