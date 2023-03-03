import styled, { createGlobalStyle, ThemeProvider } from 'styled-components/macro';
import { shallow } from 'zustand/shallow';
import { MediaItem } from './modules/caspar';
import { createPlaylistItem, Playlist, usePlaylist } from './modules/playlist';
import { ServerBrowser } from './modules/serverBrowser';
import { theme } from './theme';

// eslint-disable-next-line no-console
console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`);

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr) minmax(0, 1fr);

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

  const playlist = usePlaylist(
    (state) => ({ add: state.add }),
    shallow
  );

  const addItemToPlaylist = (item: MediaItem) => {
    playlist.add(createPlaylistItem(item));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <ServerBrowser
          onItemClick={addItemToPlaylist}
        />
        <Playlist />
        <div>
          Features
        </div>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
