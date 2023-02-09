import styled from "styled-components";
import { HiOutlineHeart, HiOutlineShieldCheck } from "react-icons/hi"
import { BsTruck } from "react-icons/bs"
import { HiOutlineBuildingStorefront } from "react-icons/hi2"
import { IoTrophyOutline } from "react-icons/io5"

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
export const Price = styled.span`
   padding-top: 16px;
   font-size: 36px;
   line-height: 36px;
   font-weight: none;
   color: var(--text1);
`
export const Card = styled.div`
   display: flex;
   & + div {
      margin-bottom: 24px;
   }
   >div {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      .title {
         font-size: 16px;
         color: var(--green);
      }
      .detalle {
         font-size: 16px;
         font-weight: 600;
         color: var(--green);
      }
      >a {
         margin-top: 4px;
         font-size: 14px;
         line-height: 18.9px;
         text-decoration: none;
         color: var(--blue3);
         &:hover {
            color: var(--blue2);
         }
      }
   }
`
export const CheckIcon = styled(BsTruck)`
   width: 28px;
   height: 28px;
   color: var(--green);
   /* padding: 2px; */
   margin-right: 10px;
   margin-top: 13px;
`
export const StoreIcon = styled(HiOutlineBuildingStorefront)`
   width: 30px;
   height: 30px;
   color: var(--green);
   /* padding: 2px; */
   margin-right: 10px;
   margin-top: 13px;
`
export const Color = styled.div`
   margin-top: 4px;
   /* margin-bottom: 8px; */
   /* padding-bottom: 8px; */
   font-size: 16px;
   line-height: 21.6px;
   color: var(--text1);
`
export const Cantidad = styled.div`
   margin-top: 16px;
   margin-bottom: 26px;
   display: flex;
   justify-content: start;
   align-items: center;
   font-size: 18px;
   color: var(--text1);
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
   &:hover {
      background-color: var(--blue1);
   }
`
export const Agregar = styled.button`
   width: 100%;
   height: 48px;
   padding: 0 24px;
   margin-bottom: 8px;
   background-color: var(--fondo);
   color: var(--blue3);
   border-radius: 5px;
   font-size: 16px;
`

export const Beneficios = styled.div`
   /* margin-top: 24px; */
   list-style: none;
   display: flex;
   flex-direction: column;
   >li {
      display: flex;
      margin-top: 16px;
      p {
         font-size: 14px;
         color: var(--blue3);
         &:hover {
            color: var(--blue2);
         }
         span {
            color: var(--text2);
         }
      }
   }
`
export const ShildeIcon = styled(HiOutlineShieldCheck)`
   width: 28px;
   height: 28px;
   opacity: .45;
   margin-top: -.1rem;
   margin-right: 5px;
`
export const CopaIcon = styled(IoTrophyOutline)`
   width: 28px;
   height: 20px;
   opacity: .45;
   margin-top: -.1rem;
   margin-right: 5px;
`