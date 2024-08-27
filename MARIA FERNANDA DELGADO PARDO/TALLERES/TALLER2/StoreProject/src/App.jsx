import { useState } from 'react'
import ProductList from './components/ProductList';
import Title from './components/Title';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";




function App() {
    const products = [{id: 0, image:'https://samsonite.com.co/cdn/shop/products/80c654d46cdac12ef0a5e4fdb4a95930379bfc0629c07ee72d90d75b85d74536.jpg?v=1679412108' , name: 'Bolso Clásico de Cuero',price: 1200,description: 'Bolso de cuero genuino con diseño clásico y elegante.'},
          {id: 1, image:'https://i.pinimg.com/564x/84/99/86/849986b59ab944387ec66b66d89552f7.jpg', name: 'Bolso Tote de Lona',price: 800,description: 'Bolso grande de lona ideal para el uso diario con asas cómodas.'},
          {id: 2, image:'https://i.pinimg.com/564x/24/99/fa/2499fa72c8878455460d99aa8fe4e598.jpg', name: 'Bolso de Mano de Seda',price: 1500,description: 'Bolso de mano sofisticado hecho de seda con detalles bordados.'},
          {id: 3, image:'https://i.pinimg.com/564x/12/ba/e7/12bae707d3874f7c5a0580c45bd9367b.jpg', name: 'Bolso Crossbody de Piel',price: 950,description: 'Bolso crossbody de piel con correa ajustable y cierre de cremallera.'},
          {id: 4, image:'https://i.pinimg.com/564x/15/9c/4a/159c4a8fde10bb6b8ce79c7cfdc1d7f3.jpg', name: 'Bolso Tote de Lona',price: 1100,description: 'Bolso de noche decorado con lentejuelas para un toque glamuroso.'},
          {id: 5, image:'https://i.pinimg.com/564x/15/9c/4a/159c4a8fde10bb6b8ce79c7cfdc1d7f3.jpg', name: 'Bolso Tote de Lona',price: 1100,description: 'Bolso de noche decorado con lentejuelas para un toque glamuroso.'},
          {id: 6, image:'https://i.pinimg.com/564x/15/9c/4a/159c4a8fde10bb6b8ce79c7cfdc1d7f3.jpg', name: 'Bolso Tote de Lona',price: 1100,description: 'Bolso de noche decorado con lentejuelas para un toque glamuroso.'},
          {id: 7, image:'https://i.pinimg.com/564x/15/9c/4a/159c4a8fde10bb6b8ce79c7cfdc1d7f3.jpg', name: 'Bolso Tote de Lona',price: 1100,description: 'Bolso de noche decorado con lentejuelas para un toque glamuroso.'}

        ];
      
    const [selectProduct, setSelectProduct] = useState(null);
    const [cart, setCart] = useState([]);
    
    const onViewDetails = (product)=>{
        console.log('Producto seleccionado: ', product)
        setSelectProduct(product)
    };

    const AddToCart = (item) =>{
        setCart([...cart, item]);
    };

    const RemoveFromCart = (itemId) =>{
      setCart(cart.filter(item => item.id !== itemId));
    }

    const onClose = () =>{
      setSelectProduct(null);
    }
    
    
  return (

    <>
    
    <Navbar position="static">
      <NavbarBrand>
        {/* <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p> */}
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
      <div>
        <Title/>
        <ProductList
          products={products}
          onViewDetails={onViewDetails}
        />
      
        { selectProduct &&
        (<ProductDetails 
          selectProduct={selectProduct}
          addToCart={AddToCart}
          onClose={onClose}
        />)}

        <Cart
          productsCart={cart}
          removeProduct={RemoveFromCart}
        /> 
      </div>
      
    </>
  )
}

export default App
