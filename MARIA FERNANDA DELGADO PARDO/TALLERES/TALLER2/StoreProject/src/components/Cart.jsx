import React from "react";

const Cart = ({productsCart, removeProduct})=>
{
    const totalCost =productsCart.reduce((p, product)=>{
        return p + product.price
    }, 0)
    return(
        <div>
            <div>
                <h1>Carrito</h1>
            </div>
            <div>
                {productsCart.map((product) => (
                <div key={product.id}>
                <p>{product.name}</p> <button onClick={()=> removeProduct(product.id)}>Remove</button>
                <p>${product.price}</p>
                </div>
                ))}
            </div>
            <div>
                <p>Costo Total = {totalCost} </p>
            </div>
        </div>
    )
};

export default Cart;