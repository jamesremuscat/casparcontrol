import nodeLogo from "./assets/node.svg";
import { useState } from 'react';
import styled from "styled-components/macro";

// eslint-disable-next-line no-console
console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`);

const AppContainer = styled.div`
  display: flex;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppContainer>
      <div>
        <a
          href="https://github.com/electron-vite/electron-vite-react"
          rel="noreferrer"
          target="_blank">
          <img
            alt="Electron + Vite logo"
            className="logo"
            src="./electron-vite.svg" />
        </a>
      </div>
      <h1>Electron + Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Electron + Vite logo to learn more
      </p>
      <div className="flex-center">
        Place static files into the<code>/public</code> folder <img
          alt="Node logo"
          src={nodeLogo}
          style={{ width: "5em" }} />
      </div>
    </AppContainer>
  );
}

export default App;
