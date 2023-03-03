import { MediaItem } from '../caspar';

export interface State {
  items: PlaylistItem[],
  add: (item: PlaylistItem, index?: number) => void,
  update: (item: PlaylistItem, index: number) => void,
}

export interface PlaylistItem {
  channel: number,
  layer: number,
}

export interface MediaPlaylistItem extends PlaylistItem {
  media: MediaItem
}
