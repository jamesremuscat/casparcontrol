import { create } from 'zustand';
import { PlaylistItem, State } from './state';

export const usePlaylist = create<State>()(
  (set, get) => ({
    items: [],

    add: (item: PlaylistItem, index=-1) => {
      set(
        ({ items }) => {
          const newItems = [...items];
          newItems.splice(index, 0, item);
          return ({ items: newItems });
        }
      );
    },

    update: (item: PlaylistItem, index: number) => set(
      ({ items }) => ({
        items: [...items.splice(index, 1, { ...items[index], ...item })]
      })
    )
  })
);
