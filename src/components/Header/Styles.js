import styled from "styled-components"

export const Container = styled.header`
   width: 100vw;
   background-color: var(--yellow);
   height: 100px;
`

export const Wrapper = styled.nav`
   max-width: 1200px;
   height: 92px;
   display: flex;
   justify-content: space-between;
   padding: 8px;
   margin: 0 auto;
   .logo {
      width: 134px;
      height: 34px;
   }
   input {
      width: 598px;
      height: 39px;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
      font-size: 16px;
      padding: 7px 60px 9px 15px;
   }
   input:focus {
      /* padding-left: 20px; */
      outline: none;
   }
   .suscripcion {
      width: 340px;
      height: 39px;
   }
` 