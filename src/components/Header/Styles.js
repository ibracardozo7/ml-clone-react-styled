import styled from "styled-components"

export const Container = styled.header`
   width: 100vw;
   background-color: var(--yellow);
   height: 100px;
   /* display: flex; */
   /* flex-direction: column; */
`

export const Wrapper = styled.div`
   max-width: 1200px;
   height: 92px;
   display: flex;
   flex-direction: column;
   margin: 0 auto;
`
export const NavBar = styled.nav`
      display: flex;
      justify-content: space-between;
      padding: 8px;
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
export const Menu = styled.div`
   display: flex;
   justify-content: space-between;
   >div {
      display: flex;

      >a {
         /* margin-top: 16px; */
         text-decoration: none;
         padding: 0 10px;
         font-size: 14px;
      }
   }
`
export const Links = styled.div`
   padding-top: 12px;
   >div {
      display: flex;
      justify-content: space-between;
      padding-right: 18px;
      padding-left: 186px;
      >a {
         font-size: 14px;
         color: var(--text2);
         text-decoration: none;
         padding-right: 18px;
      }
   }
   >a {
      font-size: 14px;
      color: var(--text2);
      text-decoration: none;
      padding-right: 18px;
   }
`