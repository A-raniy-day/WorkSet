import React from 'react';
import Product from './Product';

export default function Main(props) {
    const {products, onAdd} = props
    return (
        // <main className="block-1 col-1">
        //     <h2>Products</h2>
        //     <div className="col-2">
        //         {products.map((product) => (
        //             <Product key={product.id} product={product} onAdd={onAdd}></Product>
        //         ))}
        //     </div>
        // </main>
        <main></main>
    )
}