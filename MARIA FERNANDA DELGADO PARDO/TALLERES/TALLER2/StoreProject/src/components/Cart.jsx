import React from "react";

const Cart = (productsCart)=>
{
    return(
        <div>
            {productsCart.map((product)=>(
                <><p>{product.name}</p><p>{product.price}</p></>
            ))}
        </div>
    )
};

export default Cart;