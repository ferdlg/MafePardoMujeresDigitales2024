import React from "react";
import ProductDetails from "./ProductDetails";


const ProductItem = ({name, image, price, description, onViewDetails})=>
{
    return (
        <div id="div-item">
            <p>{name}</p>
            <p>${price}</p>
            <img src={image} />
            <button type="button" onClick={()=> onViewDetails({name, image, price, description})}>Ver detalles</button>
        </div>
    )
};

export default ProductItem;
