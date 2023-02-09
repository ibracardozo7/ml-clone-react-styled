import { Container, Estado, Row, HeartIcon, Price, Card, CheckIcon, Color, Cantidad, ButtonCard, Comprar, Agregar, Beneficios, ShildeIcon, StoreIcon, CopaIcon } from "./styled"

const ProductVenta = () => {
   return (
      <Container>
         <Estado> Nuevo | Usados</Estado>
         <Row>
            <h1>iPhone 12 Pro Max (Reacondicionado)</h1>
            <HeartIcon />
         </Row>
         <Price>
            $ 340.000
         </Price>
         <Card >
            <CheckIcon />
            <div>
               <span className="title">Llega gratis <span className="detalle">entre el martes y el viernes 17 de febrero</span></span>
               <a href="#">Ver más formas de entrega</a>
            </div>
         </Card>
         <Card>
            <StoreIcon />
            <div>
               <span className="title">Retirá gratis <span className="detalle">entre el 15 y 22 feb. en correo y otros puntos</span></span>
               <a href="#">Ver en el mapa</a>
            </div>
         </Card>
         <Color>
            Color: <strong>Oro/Plata</strong>
         </Color>
         <Cantidad>
            ¡Última disponible!
         </Cantidad>
         <ButtonCard>
            <Comprar>Comprar ahora</Comprar>
            <Agregar>Agregar al carrito</Agregar>
         </ButtonCard>
         <Beneficios>
            <li>
               <ShildeIcon />
               <p>Compra Protegida<span>, recibí el producto que esperabas o te devolvemos tu dinero.</span></p>
            </li>
            <li>
               <CopaIcon />
               <p>Mercado Puntos. <span>Suma 50 punto.</span></p>
            </li>
         </Beneficios>
      </Container>
   )
}

export default ProductVenta