import { CasparCG } from 'casparcg-connection';
import { useEffect } from 'react';
import { create } from 'zustand';
import { ConnectParams, State } from './state';


const useCasparState = create<State>()(
  (set, get) => ({

    connection: null,
    connect: ({ host, port }: ConnectParams) => {

      const conn = new CasparCG({ host, port });

      conn.on('connect', () => set({ connected: true }));
      conn.on('disconnect', () => set({ connected: false }));

      set({
        connection: conn
      });
    },
    disconnect: () => {
      set(
        (state) => {
          state.connection?.disconnect();
          return { connected: false };
        }
      );
    },

    connected: false,
    setConnected: (connected: boolean) => set({ connected }),

    media: [],
    refreshMedia: () => {
      get().connection?.cls({ subDirectory: '' }).then(
        ({ request }) => request?.then(
          (r) => {
            set({ media: r.data });
          }
        )
      );
    }
  })
);

export const useCaspar = (): State => {

  const state = useCasparState();

  useEffect(
    () => () => {
      if (state.connected) {
        state.disconnect();
      }
    },
    [state]
  );

  return state;

};