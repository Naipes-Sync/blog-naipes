import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :focus {
    outline: transparent;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.purple500};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.gray600};
    color: ${({ theme }) => theme.colors.gray100};
    -webkit-font-smoothing: antialiased;
  }

  body, input, select, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;

export default GlobalStyle;
