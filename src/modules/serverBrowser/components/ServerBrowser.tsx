import { Input } from '@/components/Input';
import { ConnectionState, useCaspar } from '@/modules/caspar';
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
      if (caspar.connectionState !== ConnectionState.CONNECTED) {
        caspar.connect(serverAddress);
      }
    },
    [caspar, serverAddress]
  );

  const cls = async () => {
    const c = await caspar.connection.cls({ subDirectory: '' });
    console.log(c);
    const r = await c.request;
    console.log(r);
    console.log(r.data);
  }

  return (
    <Container>
      Server browser
      <Input
        onChange={e => setServerAddress(e.target.value)}
        value={serverAddress}
      />
      <button
        disabled={caspar.connectionState === ConnectionState.CONNECTED || serverAddress.length === 0}
        onClick={doConnect}
      >
        Connect
      </button>
      <button
        disabled={caspar.connectionState !== ConnectionState.CONNECTED}
        onClick={cls}
      >
        cls
      </button>
    </Container>
  );
};
