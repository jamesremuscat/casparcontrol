import styled, { createGlobalStyle, ThemeProvider } from "styled-components/macro";
import { CasparConnectionProvider } from "./modules/caspar";
import { ServerBrowser } from "./modules/serverBrowser";
import { theme } from "./theme";

// eslint-disable-next-line no-console
console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`);

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  height: 100vh;
  width: 100vw;
  overflow: hidden;

  background-color: ${ props => props.theme.backgroundColor };
`;

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;

    font-family: sans-serif;
  }
`;

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CasparConnectionProvider>
        <AppContainer>
          <ServerBrowser />
          <div>
            Playlist
          </div>
          <div>
            Features
          </div>
        </AppContainer>
      </CasparConnectionProvider>
    </ThemeProvider>
  );
}

export default App;
