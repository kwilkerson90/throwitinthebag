import React from "react";
import PropTypes from 'prop-types';
import './CartPage.css';
import Item from "./Item";

function CartPage({items}) {
    return (
        <ul className="CartPage-items">
            {items.map(item => 
                <li key={item.id} className="CartPage-item">
                <Item item={item}/>
                </li>)}
        </ul>
    );
}
//the function above is a component 

CartPage.propTypes = {
    items: PropTypes.array.isRequired
    //PropTypes.array is a validator; says that the prop should be an array
    //isRequired can be chained to any prop validator to ensure that a warning is shown
        //whenever the prop is not provided 
};


export default CartPage;