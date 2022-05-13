import React from "react";
import PropTypes from 'prop-types';
import './CartPage.css';
import Item from "./Item";

function CartPage({items, onAddOne, onRemoveOne}) {
    return (
        <ul className="CartPage-items">
            {items.map(item => 
                <li key={item.id} className="CartPage-item">
                <Item item={item}>
                </Item>
                </li>)}
        </ul>
    );
}
//the function above is a component 

CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddOne: PropTypes.func.isRequired,
    onRemoveOne: PropTypes.func.isRequired
    //PropTypes.array is a validator; says that the prop should be an array
    //isRequired can be chained to any prop validator to ensure that a warning is shown
        //whenever the prop is not provided 
};


export default CartPage;