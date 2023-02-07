import { Container, Title, Card, LocationIcon, PlaticumIcon, Reputacion, Caja, Row, SupporIcon, ClockIcon, Link } from "./styled"
import { GoLocation } from "react-icons/go"
const InfoVendedor = () => {
   return (
      <Container>
         <Title>Información sobre el vendedor</Title>
         <Card>
            <LocationIcon />
            <div>
               <p>Ubicacion</p>
               <strong>Jujuy, Argentina</strong>
            </div>
         </Card>
         <Card>
            <PlaticumIcon />
            <div>
               <p className="platinum">MercadoLíder Platinum</p>
               <strong>¡Es uno de los mejores del sitio!</strong>
            </div>
         </Card>
         <Reputacion>
            <Caja>
               <li />
               <li />
               <li />
               <li />
               <li className="active" />
            </Caja>
         </Reputacion>
         <Row>
            <div>
               <strong>+10mil</strong>
               <span>Ventas en los últimos 60 días</span>
            </div>
            <div>
               <strong>
                  <SupporIcon />
               </strong>
               <span>Brinda buena atención</span>
            </div>
            <div>
               <strong>
                  <ClockIcon />
               </strong>
               <span>Despacha sus productos a tiemp</span>
            </div>
         </Row>
         <Link href="#">Ver más datos de este vendedor</Link>
      </Container>
   )
}  

export default InfoVendedor