import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 12px;
   /* border: solid 1px red; */
`

export const Panel = styled.div`
   background-color: var(--white);
   box-shadow: var(--panel);
   display: grid;
   grid-template-columns: 67fr 33fr;
`

export const Column = styled.div``

export const Galeria = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 530px;

   > img {
      height: 75%;
   }
`

export const Description = styled.div`
   border-top: solid 1px var(--border);
   width: 88%;
   margin: 0 auto;
   padding: 40px 0;
   >h4 {
      color: var(--text1);
      font-size: 24px;
      margin-bottom: 24px;
      line-height: 30px;
   }
   >p {
      font-size: 20px;
      color: var(--text3);
      line-height: 30px;
   }
`
