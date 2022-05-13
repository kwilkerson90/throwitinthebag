import React from "react";

const Nav = ({activeTab, onTabChange}) => {
    const itemClass = (tabName) => `
        App-nav-item ${
            (activeTab === tabName) ? 'selected' : ''}
    `;
    return (
        <nav className="App-nav">
            <ul>
                <li className={itemClass('items')}>
                    <button onClick={() => onTabChange('items')}>Items</button>
                </li>
                <li className={itemClass('cart')}>
                    <button onClick={() => onTabChange('cart')}>Cart</button>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;

/*
-the parent is nav with a class of App-nav
    -the list items are siblings 
-giving the LIs class names of App-nav-item allows us to target these elements for CSS styling 
*/

//we make a dynamic class names function that we can use inside JSX in lieu of a String class name 