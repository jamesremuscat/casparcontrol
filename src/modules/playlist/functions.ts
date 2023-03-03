import { MediaItem } from '../caspar';
import { MediaPlaylistItem } from './state';

export const createPlaylistItem = (item: MediaItem): MediaPlaylistItem => ({
  media: item,
  channel: 1,
  layer: 10
});
