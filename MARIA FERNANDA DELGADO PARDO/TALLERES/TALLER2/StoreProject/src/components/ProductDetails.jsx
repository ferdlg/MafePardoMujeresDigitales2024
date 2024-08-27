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
      <Button onPress={onOpen} hidden ></Button>
        <Modal isOpen={Boolean(selectProduct)} onClose={onClose} isDismissable={false} isKeyboardDismissDisabled={true}>        <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">{selectProduct.name}</ModalHeader>
                <ModalBody>
                    <img src={selectProduct.image}/>
                    <p>{selectProduct.description}</p>
                    <p>{selectProduct.price}</p>
                
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>Close</Button>
                  <Button color="primary" onClick={()=> addToCart(selectProduct)}>Agregar al carrito</Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    )
};

export default ProductDetails;