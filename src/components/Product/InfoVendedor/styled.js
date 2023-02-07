import styled, { css } from "styled-components";
import { HiOutlineLocationMarker, HiOutlineChatAlt2, HiOutlineClock } from "react-icons/hi"
import { IoMdRibbon } from "react-icons/io"

const iconsCss = css`
   width: 20px;
   height: 25px;
`

export const Container = styled.div`
   padding: 32px 16px;
   margin: 0 16px;
   border: 1px solid var(--border);
   border-radius: 10px;
   display: flex;
   flex-direction: column;
`
export const Title = styled.div`
   font-size: 18px;
   line-height: 22.5px;
   color: var(--text1);
   margin-bottom: 28px;
`
export const Card = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 20px;
   >div {
      margin-left: 10px;
      >p {
         font-size: 16px;
         line-height: 21.6px;
         color: var(--text1);
      }
      >strong {
         font-size: 14px;
         line-height: 18.9px;
         color: var(--text2);
         font-weight: normal;
      }
      .platinum {
         color: var(--green);
      }
   }
`
export const LocationIcon = styled(HiOutlineLocationMarker)`
   opacity: .7;
   margin-top: -1.3rem;
   ${iconsCss}
`
export const PlaticumIcon = styled(IoMdRibbon)`
   color: var(--green);
   opacity: .7;
   margin-top: -1rem;
   ${iconsCss}
`

export const Reputacion = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`

export const Caja = styled.ol`
   list-style: none;
   width: 100%;
   display: grid;
   grid-template-columns: repeat(5, 1fr);
   grid-gap: 7px;
   padding: 0 4px;
   align-items: center;
   >li {
      width: 100%;
      height: 8px;
      &:nth-child(1) {
         background-color: var(--reputacion1);
      }
      &:nth-child(2) {
         background-color: var(--reputacion2);
      }
      &:nth-child(3) {
         background-color: var(--reputacion3);
      }
      &:nth-child(4) {
         background-color: var(--reputacion4);
      }
      &:nth-child(5) {
         background-color: var(--reputacion5);
      }
      &.active{
         height: 12px;
      }
   }
`

export const Row = styled.div`
   margin-top: 18px;
   display: flex;
   /* justify-content: space-between; */
   align-items: flex-start;
   >div {
      width: 33%;
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      >strong {
         font-size: 24px;
         line-height: 28.8px;
         font-weight: normal;
      }
      >span {
         font-size: 12px;
         color: var(--text1);
      }
      position: relative;
      & + div {
         &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            transform: translate(-50%);
            height: 36px;
            border-left: 1px solid var(--border);
         }
      }
   }
`
export const SupporIcon = styled(HiOutlineChatAlt2)``

export const ClockIcon = styled(HiOutlineClock)``

export const Link = styled.a`
   font-size: 14px;
   line-height: 18.9px;
   text-decoration: none;
   color: var(--blue3);
   margin-top: 24px;
   :hover {
      color: var(--blue2);
   }
`