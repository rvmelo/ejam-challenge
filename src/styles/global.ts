import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.black};
  }

  body {
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

`
