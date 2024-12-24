import styled, {
    createGlobalStyle,
} from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    margin:0;
    background-color: #ffffff;
    height:100vh;
    overflow-x:hidden ;
    scroll-behavior: smooth;
    font-family:"Montreal";
 
  }
  html{
  scroll-behavior: smooth;
}
/* Montreal */
@font-face {
  font-family: "Montreal";
  font-weight: 500;
  src: url("./assets/fonts/NeueMontreal-Bold.otf");
}
@font-face {
  font-family: "Montreal";
  font-weight: 500;
  src: url("./assets/fonts/NeueMontreal-Medium.otf");
}
@font-face {
  font-family: "Montreal";
  src: url("./assets/fonts/NeueMontreal-Regular.otf");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Montreal";
  src: url("./assets/fonts/NeueMontreal-Light.otf");
  font-weight: 300;
  font-style: normal;
}

`
export const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
