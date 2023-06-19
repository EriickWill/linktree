import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
  --bg-color:#111111;
  --destaque:#A66060;

}
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    background: var(--bg-color);
  }
  .container{
    max-width: 1400px;
    margin-inline:auto;
    padding-inline: 2%;
    width: 100%;
  }
 
`
