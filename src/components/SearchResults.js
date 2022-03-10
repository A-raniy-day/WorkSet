import React from 'react';
import Product from './Product2';
//const { Product } = require('./Product')

export default function searchRes(props) {
    const {results} = props;
    console.log(results)
    return <aside className="block-2 col-1 center">
        <div class="no-results">{results === [] && <div>No Results!</div>}</div>
        {results.map((item) => (
            <div key={item.bid} className="every-row">
                <Product key={item.bid} product={item}></Product>
                <div className="col-2 text-right">
                </div>
            </div>
        ))}
        {results.length !== 0 && (
            <>
                <hr></hr>
            </>
        )}
    </aside>
}
