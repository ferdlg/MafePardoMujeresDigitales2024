import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";


const Cart = ({productsCart, removeProduct})=>
{
    const totalCost =productsCart.reduce((p, product)=>{
        return p + product.price
    }, 0)
    
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    
    return(
        <>
        <Button onPress={onOpen}  className="bg-red-500 text-stone-50" id="Cart"> Carrito
        </Button>
        <Modal 
          backdrop="opaque" 
          isOpen={isOpen} 
          onOpenChange={onOpenChange}
          isDismissable={false}
          motionProps={{
            variants: {
              enter: {
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              },
              exit: {
                x: -20,
                opacity: 0,
                transition: {
                  duration: 0.2,
                  ease: "easeIn",
                },
              },
            }
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-red-950 shadow-md">Carrito de compra</ModalHeader>
                <ModalBody className="shadow-sm">
                    {productsCart.map((product) => (
                    <div key={product.id}>
                    <p>{product.name}</p>
                    <p>${product.price}</p>
                    <Button onClick={()=> removeProduct(product.id)} variant="flat" className="bg-slate-300 text-slate-900">Remove</Button>
                    </div>
                    ))}
                    <div>
                        <b className="text-red-800">Costo Total = $ {totalCost} </b>
                    </div>
                </ModalBody>
                <ModalFooter>
                  <Button className="border-lime-700 text-lime-700" onPress={onClose}  variant="bordered">
                    Seguir comprando
                  </Button>
                  <Button className="bg-red-500 text-stone-50" onPress={onClose} >
                    Finalizar compra
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    )
};

export default Cart;