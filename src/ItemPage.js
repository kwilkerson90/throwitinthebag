import React from "react";
import PropTypes from 'prop-types';
import './ItemPage.css';
import Item from "./Item";

function ItemPage({items, onAddToCart}) {
    return (
        <ul className="ItemPage-items">
            {items.map(item => 
                <li key={item.id} className="ItemPage-item">
                <Item item={item} onAddToCart={() => onAddToCart(item)}/>
                </li>)}
        </ul>
    );
}
//the function above is a component 

ItemPage.propTypes = {
    items: PropTypes.array.isRequired
    //PropTypes.array is a validator; says that the prop should be an array
    //isRequired can be chained to any prop validator to ensure that a warning is shown
        //whenever the prop is not provided 
};


export default ItemPage;