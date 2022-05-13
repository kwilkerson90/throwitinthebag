import React from "react";
import PropTypes from 'prop-types';
import './ItemPage.css';

function ItemPage({items}) {
    return (
        <ul className="ItemPage-items">
            {items.map(item => 
                <li key={item.id} className="ItemPage-item">
                {item.name}
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