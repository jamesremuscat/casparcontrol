import { Input } from '@/components/Input';
import { useState } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.5em;
`;

export const ServerBrowser = () => {

  const [serverAddress, setServerAddress] = useState<string>('');

  return (
    <Container>
      Server browser
      <Input
        onChange={e => setServerAddress(e.target.value)}
        value={serverAddress}
      />
    </Container>
  );
};
