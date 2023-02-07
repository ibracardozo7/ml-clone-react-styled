import styled from "styled-components";

export const Section = styled.div`
   /* width: 350px; */
   /* height: 305px; */
   border: 1px solid var(--border);
   padding: 32px 16px;
   margin: 16px;
   border-radius: 10px;
   >h5 {
      font-size: 18px;
      line-height: 22.5px;
      margin-bottom: 28px;
      color: var(--text1);
   }
   >div {
      display: flex;
      flex-direction: column;
      line-height: 18.9px;

      >span {
         margin-bottom: 24px;
      }
   }
   .title {
      color: var(--text1);
      margin-bottom: 12px;
      font-size: 16px;
      line-height: 21.6px;
   }
   .description {
      color: var(--text2);
      font-size: 14px;
      line-height: 18.9px;
   }
   a {
      font-size: 14px;
      line-height: 18.9px;
      color: var(--blue3);
      text-decoration: none;
   }
   a:hover {
      color: var(--blue2);
   }

`