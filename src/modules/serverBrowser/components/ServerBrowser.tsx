import { Input } from '@/components/Input';
import { useCaspar } from '@/modules/caspar';
import { useCallback, useState } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.5em;
`;

export const ServerBrowser = () => {

  const [serverAddress, setServerAddress] = useState<string>('');
  const caspar = useCaspar();

  const doConnect = useCallback(
    () => {
      if (!caspar.connected) {
        caspar.connect({ host: serverAddress });
      }
    },
    [caspar, serverAddress]
  );

  const cls = () => {
    caspar.refreshMedia();
  };

  return (
    <Container>
      Server browser
      <Input
        onChange={e => setServerAddress(e.target.value)}
        value={serverAddress}
      />
      <button
        disabled={caspar.connected || serverAddress.length === 0}
        onClick={doConnect}
      >
        Connect
      </button>
      <button
        disabled={!caspar.connected}
        onClick={cls}
      >
        cls
      </button>
    </Container>
  );
};
