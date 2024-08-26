import React from "react";
import {Card, CardBody, CardFooter, Image, Button} from "@nextui-org/react";


const ProductItem = ({name, image, price, description, onViewDetails})=>
{

    return (
        <Card shadow="sm" isPressable id="card-item">
          <CardBody className="overflow-visible p-0">
          <b>{name}</b>
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              className="w-full object-cover h-[140px]"
              src={image}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <p className="text-default-500">{price}</p>
            <Button auto  onClick={()=> onViewDetails({name, image, price, description})}>Ver detalles</Button>
          </CardFooter>
        </Card>
    )
};

export default ProductItem;
