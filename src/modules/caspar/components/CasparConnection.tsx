import { useCallback, useRef, useState } from "react";

import { CasparCG } from "casparcg-connection";

import { ConnectionState } from "../constants";
import { ConnectionContext } from "../context";

interface PropTypes {
  children: React.ReactNode
}

export const CasparConnectionProvider = ({ children }: PropTypes) => {

  const [connectionState, setConnectionState] = useState<ConnectionState>(ConnectionState.NOT_CONNECTED);

  const connection = useRef<CasparCG | null>(null);

  const connect = useCallback(
    (host?: string, port?: number) => {
      const myConnection = new CasparCG({ host, port });

      myConnection.on('connect', () => setConnectionState(ConnectionState.CONNECTED));
      myConnection.on('disconnect', () => setConnectionState(ConnectionState.NOT_CONNECTED));
      myConnection.on('error', () => setConnectionState(ConnectionState.ERRORED));

      connection.current = myConnection;

    },
    []
  );

  return (
    <ConnectionContext.Provider value={{ connect, connectionState, connection: connection.current }}>
      { children }
    </ConnectionContext.Provider>
  );
};
