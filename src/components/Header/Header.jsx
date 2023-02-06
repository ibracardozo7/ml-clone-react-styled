import React from "react";
import { Container, Wrapper } from "./styles"

const Header = () => {
   return (
      <Container>
         <Wrapper>
            <img className="logo" src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.22/mercadolibre/logo__large_plus.png" alt="logo-ml" />
            <input type="text" placeholder="Buscar productos, marcas y más…" />
            <img className="suscripcion" src="https://http2.mlstatic.com/D_NQ_887100-MLA50801817839_072022-OO.webp" alt="suscripcion-disney" />
         </Wrapper>
      </Container>
   )
}

export default Header