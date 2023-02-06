import React from "react";
import { Container, Panel, Column, Galeria, Description } from "./styles"
import ProductVenta from "./ProductVenta/ProductVenta"
import InfoVendedor from "./InfoVendedor/InfoVendedor"
import Garantia from "./Garantia/Garantia"

const Product = () => {
   return (
      <Container>
         <Panel>
            <Column>
               <Galeria>
                  <img src="https://http2.mlstatic.com/D_NQ_NP_622456-MLA49023968025_022022-O.webp" alt="foto-galeria" />
               </Galeria>
               <Info />
            </Column>
            {/*  */}
            <Column>
               <ProductVenta />
               <InfoVendedor />
               <Garantia />
            </Column>
         </Panel>
      </Container>
   )
}

export default Product

const Info = () => {
   return (
      <Description>
         <h4>Descripcion</h4>
         <p>Directamente de Estados Unidos, batería 98%</p>
      </Description>
   ) 
}