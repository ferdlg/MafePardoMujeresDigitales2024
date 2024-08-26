import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

const Title = ()=>{
    return(
        <Navbar position="static">
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <div >
                    <h1>Tienda de productos</h1>
                </div>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Link color="foreground" href="#">
                    Carrito
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarBrand>
                <NavbarItem>
                    <Link color="foreground" href="#">
                    logo
                    </Link>
                </NavbarItem>
            </NavbarBrand>
        </Navbar>
    )
}

export default Title;