import React from 'react';

export default function Header(props) {
    const { countCartItems } = props
    const { headerText } = props
    return (
        <header className="row block-1 center">
            <div>
                <a href="#/">
                    <h1>{ headerText }</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">
                    Cart{' '}
                    {countCartItems ? (
                        <button className="badge">{countCartItems}</button>
                    ) : (
                        ''
                    )}
                </a>{''}
                <a href="#/signin">SignIn</a>
            </div>
        </header>
    )
}