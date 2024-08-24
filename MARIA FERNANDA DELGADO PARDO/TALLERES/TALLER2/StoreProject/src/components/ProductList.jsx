import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({products = [], onViewDetails})=>
    {
        return (
            <div>
                {products.map((product) => (
                    <ul>
                        <li>
                            <ProductItem
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            description={product.description}
                            onViewDetails={onViewDetails}
                            />
                        </li>
                    </ul>
                ))}
            </div>
        )
    };

export default ProductList;


