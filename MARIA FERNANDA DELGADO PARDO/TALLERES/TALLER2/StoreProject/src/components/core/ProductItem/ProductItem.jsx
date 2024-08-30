import React from "react";
import {Card, CardBody, CardFooter, Image, Button, CardHeader} from "@nextui-org/react";


const ProductItem = ({name, image, price, description, onViewDetails})=>
{

    return (
        <Card shadow="sm" isPressable id="card-item" className="shadow-lg">
         
          <CardBody className="overflow-visible p-0 bg-piedra-50">
            <Image 
              id="image"
              shadow="sm"
              radius="lg"
              width="100%"
              className="w-full object-cover h-[140px] "
              src={image}
            />
            <b className="text-red-900">{name}</b>
          </CardBody>
          <CardFooter className="text-small justify-between bg-piedra-50" >
            <p className="text-default-500">$ {price}</p>
            <Button auto  onClick={()=> onViewDetails({name, image, price, description})} className="bg-Red-800 text-stone-50">Ver detalles</Button>
          </CardFooter>
        </Card>
    )
};

export default ProductItem;
