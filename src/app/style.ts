import styled from "styled-components"

export const Main = styled.main`
margin-top: 30px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap:25px;
  h1{
    color:var(--destaque);
    font-size: 40px;
  }
  .img{
    border-radius: 50%;
  }
  section{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
  }
`