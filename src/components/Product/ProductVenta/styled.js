import styled from "styled-components";
import { HiOutlineHeart, HiOutlineCheck, HiOutlineShieldCheck } from "react-icons/hi"

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   margin: 16px;
   padding: 16px;
   border: 1px solid var(--border);
   border-radius: 10px;
`
export const Estado = styled.div`
   margin-bottom: 8px;
   font-size: 14px;
   line-height: 18.9px;
   color: var(--text2);
`
export const Row = styled.div`
   display: flex;
   justify-content: space-between;
   >h1 {
      width: 100%;
      font-size: 22px;
      line-height: 25.96px;
      color: var(--text1);
      font-weight: 500;
      /* margin: 0 36px 8px 0; */
   }
`
export const HeartIcon = styled(HiOutlineHeart)`
   width: 28px;
   height: 28px;
   color: var(--blue2);
   cursor: pointer;
   margin-left: 16px;
`
export const Price = styled.div``
export const Card = styled.div`
   >div {
      margin-top: 20px;
      >span {
         font-size: 16px;
         color: var(--green);
      }
      >a {
         margin-top: 4px;
         font-size: 14px;
         text-decoration: none;
         color: var(--blue3);
      }
   }
`
export const Color = styled.div`
`
export const CheckIcon = styled.div`
`
export const Cantidad = styled.div`
`
export const ButtonCard = styled.div`
`
export const Comprar = styled.button`
   width: 100%;
   height: 48px;
   margin-bottom: 8px;
   padding: 0 24px;
   background-color: var(--blue3);
   color: var(--white);
   border-radius: 5px;
   font-size: 16px;
   font-weight: bold;
`
export const Agregar = styled.button`
   width: 100%;
   height: 48px;
   padding: 0 24px;
   background-color: var(--fondo);
   color: var(--blue3);
   border-radius: 5px;
   font-size: 16px;
`

export const Beneficios = styled.div``
export const ShildeIcon = styled.div``
// export const B = styled.div``