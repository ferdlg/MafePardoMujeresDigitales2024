import React from "react";

const Cart = ({productsCart})=>
{
    return(
        <div>
            <div>
                <h1>Carrito</h1>
            </div>
            {productsCart.map((product) => (
            <div key={product.id}>
            <p>{product.name}</p>
            <p>${product.price}</p>
            </div>
      ))}
        </div>
    )
};

export default Cart;