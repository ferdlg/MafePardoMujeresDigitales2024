import React from "react";
import ProductItem from "./ProductItem";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";

const ProductList = ({products, onViewDetails})=>
    {
        return (
            <div id="div-list">
                {products.map((product) => (
                    <ul>
                        <li key={product.id}>
                            <ProductItem
                            name={product.name}
                            price={product.price}
                            image={product.image}
                            description={product.description}
                            onViewDetails= {()=>{}}
                            />
                        </li>
                    </ul>
                ))}
            </div>
        )
    };

export default ProductList;


