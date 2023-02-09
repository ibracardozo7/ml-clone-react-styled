import React from "react";
import { Container, NavBar, Wrapper, Menu, Links } from "./styles"

const Header = () => {
   return (
      <Container>
         <Wrapper>
            <NavBar>
               <img className="logo" src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.22/mercadolibre/logo__large_plus.png" alt="logo-ml" />
               <input type="text" placeholder="Buscar productos, marcas y más…" />
               <img className="suscripcion" src="https://http2.mlstatic.com/D_NQ_887100-MLA50801817839_072022-OO.webp" alt="suscripcion-disney" />
            </NavBar>
            <Menu>
                  <Links>
                     <div>
                        {/* <p>Capital Federal</p> */}
                        <a>Categorias</a>
                     </div>
                     <a href="#">Ofertas</a>
                     <a href="#">Historial</a>
                     <a href="#">Supermercado</a>
                     <a href="#">Moda</a>
                     <a href="#">Vender</a>
                     <a href="#">Ayuda</a>
                  </Links>
               <div>
                  <a href="#">Crea tu cuenta</a>
                  <a href="#">Ingresa</a>
                  <a href="#">Mis compras</a>
               </div>
            </Menu>
         </Wrapper>
      </Container>
   )
}

export default Header