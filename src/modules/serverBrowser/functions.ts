import { MediaItem } from '../caspar';

export interface PathHierarchy {
  name: string,
  children: PathHierarchy[],
  items: MediaItem[]
}

export const createPathHierarchy = (media: MediaItem[]) : PathHierarchy => {
  const root = {
    'name': '/',
    children: [],
    items: []
  };

  return root;
};
