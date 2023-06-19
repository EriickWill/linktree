import styled from "styled-components"

export const LinkContainer = styled.div`
  position: relative;
  max-width: 500px;
  width: 100%;
  height: 80px;
  border: 2px solid var(--destaque);
  
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
 
  a{
    width: 100%;
    height:100%;
    color:var(--destaque);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.5s ease-in-out;
    font-weight: 700;
    font-size: 18px;
  }
  :before{
    position: absolute;
    content: "";
    width: 10px;
    height: 100%;
    background: var(--destaque);
    left: 0;
    transition: all 0.5s ease-in-out;
    z-index:-1;
  }
  :hover{
    color:black;
  }
  :hover:before{
    width: 100%;
  }
`
