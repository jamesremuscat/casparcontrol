import { useContext } from 'react';
import { ConnectionContext } from './context';

export const useCaspar = () => useContext(ConnectionContext);
