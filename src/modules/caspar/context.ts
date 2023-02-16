import { createContext } from "react";
import { ConnectionState } from "./constants";

interface Connection {
  connect: (host?: string, port?: number) => void,
  connectionState: ConnectionState,
  connection: unknown | null
}

const initialState: Connection = {
  connect: () => { /* */ },
  connectionState: ConnectionState.NOT_CONNECTED,
  connection: null
};

export const ConnectionContext = createContext<Connection>(initialState);
