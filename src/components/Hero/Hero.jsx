import React from "react";
import { Container, Row } from "./styles"

const Hero = () => {
   return (
      <Container>
         <Row>
            <a href="#" className="volver"> Volver al listado</a>
            <a href="#">Celulares y Teléfonos</a>
            <a href="#">Celulares y Smartphones</a>
         </Row>
         <Row>
            <a href="#"> Compartir</a>
            <a href="#"> Vender Uno igual</a>
         </Row>
      </Container>
   );
};

export default Hero;
