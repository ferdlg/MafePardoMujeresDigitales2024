import React from "react";
import ProductItem from "./ProductItem";

const ProductDetails = ({selectProduct})=>
{
    return(
        <ProductItem
            name = {selectProduct.name}
            image = {selectProduct.image}
            price={selectProduct.price}
            description={selectProduct.description}
            onButtonClick = {onAddToCart(selectProduct)}
            buttonText = "Agregar al carrito"
        />
    )
};

export default ProductDetails;