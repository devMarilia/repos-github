import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle` 
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    background-color: #30363d;
  }
  a {
    color: #333;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    margin: 0;
  }
  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
  }
  h2 {  
    font-size: 2rem;
    line-height: 1.2;
  }
  li {
    list-style: none;
  }
  p {
    margin: 0;
  }
  .App {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 1.0875rem 1.45rem;
  }
  .App-header {
    background-color: #222;
    padding: 1.5rem 1.0875rem;
    margin-bottom: 1.45rem;
  }
  .App-header h1 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  `