import React from "react";
import ProductItem from "./ProductItem";

const ProductDetails = ({selectProduct})=>
{
    return(
        <ProductItem
            name = {selectProduct.name}
            price={selectProduct.price}
            description={selectProduct.description}
            onButtonClick = {onAddToCart}
            buttonText = "Agregar al carrito"
        />
    )
};

export default ProductDetails;