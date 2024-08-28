import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, useDisclosure} from "@nextui-org/react";
import Cart from "./Cart";

const Title = ()=>{
    const {onOpen} = useDisclosure();
    return(
        <>
        <Navbar shouldHideOnScroll id="Navbar" className="text-stone-50 shadow-md" >
        <NavbarBrand>
          <Button  className="bg-red-400 text-stone-50 shadow_xl" > Carrito
          </Button>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive >
            <h1 >
              Tienda de productos
            </h1>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            
          </NavbarItem>
        </NavbarContent>
      </Navbar>
        </>
    )
}

export default Title;
