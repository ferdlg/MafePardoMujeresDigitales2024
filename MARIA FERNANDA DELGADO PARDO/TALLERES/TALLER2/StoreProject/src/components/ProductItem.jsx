import React from "react";
import ProductDetails from "./ProductDetails";


const ProductItem = ({name, price, description, onViewDetails})=>
{
    return (
        <div>
            <h3>{name}</h3>
            <h4>{price}</h4>
            <button type="button" onClick={onViewDetails}>Ver detalles</button>
        </div>
    )
};

export default ProductItem;
