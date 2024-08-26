import React from "react";
import ProductItem from "./ProductItem";

const ProductDetails = ({selectProduct, addToCart})=>
{
    
    if(!selectProduct){
        return null;
    }
    console.log('Detalles del producto: ', selectProduct)
    return(
        <div>
                <ProductItem
                    name = {selectProduct.name}
                    image = {selectProduct.image}
                    price={selectProduct.price}
                    description={selectProduct.description}
                    />  
                <button type="button" onClick={()=> addToCart(selectProduct)}>Agregar al carrito</button>
        </div>
        
    )
};

export default ProductDetails;