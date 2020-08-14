import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
  :root {
    font-size: 60%;

    /* --color-primary:#f0a202ff;
    --color-primary-dark:#f18805ff;
    --color-primary-darker: #d95d39ff;
    --color-secondary: #0e1428ff;
    --color-secondary-light: #7b9e89ff;
    --color-text: #eeeeee; */
  }

  body {
    font-family: 'Roboto Mono', monospace;
    background-color: ${props => props.theme.colors.secondaryLight};
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }
  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body,
  input,
  button,
  textarea {
    color: ${props => props.theme.colors.text};
  }

  ::-webkit-scrollbar {
    width: 0.5rem;

  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.primary};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.secondary};
  }
`