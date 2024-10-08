import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, image} from "@nextui-org/react";


const ProductDetails = ({selectProduct, addToCart, onClose})=>
{
    if(!selectProduct){
        return null;
    }
    console.log('Detalles del producto: ', selectProduct)
    const {onOpen, } = useDisclosure();
    return(
        <>
        <Button onPress={onOpen} hidden:true id='btn-hidden'>Open Modal</Button>
        <Modal isOpen={Boolean(selectProduct)} onClose={onClose} isDismissable={false} isKeyboardDismissDisabled={true} >        <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">{selectProduct.name}</ModalHeader>
                <ModalBody className="bg-Amber-100 shadow-inner">
                    <img src={selectProduct.image} />
                    <p>{selectProduct.description}</p>
                    <p>$ {selectProduct.price}</p>
                
                </ModalBody>
                <ModalFooter>
                    <Button className="bg-stone-50 text-stone-500" variant="light" onPress={onClose}>
                    Cerrar
                    </Button>
                  <Button className="bg-red-800 text-stone-50" onClick={()=> addToCart(selectProduct)}>
                    Agregar al carrito
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    )
};

export default ProductDetails;