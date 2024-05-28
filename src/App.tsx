import {ThemeProvider} from 'styled-components';
import GlobalStyle from './GlobalStyle';
import theme from './theme';
import {Header} from "./components/Header.tsx";


function App() {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <Header/>
      </ThemeProvider>
  );
}

export default App;
