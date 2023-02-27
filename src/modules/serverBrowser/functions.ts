import path from 'path';
import { MediaItem } from '../caspar';

export interface PathHierarchy {
  name: string,
  children: Record<string, PathHierarchy>,
  items: AugmentedMediaItem[]
}

export interface AugmentedMediaItem extends MediaItem {
  localName: string
}

const splitPath = (p: string) => p.split(path.sep);

const getPath = (parent: PathHierarchy, pathParts: string[]): PathHierarchy => {

  if (pathParts.length === 0) {
    return parent;
  }

  const nextPath = pathParts[0];

  if (!parent.children[nextPath]) {
    parent.children[nextPath] = {
      name: nextPath,
      children: {},
      items: []
    };
  }

  return getPath(parent.children[nextPath], pathParts.slice(1));
};

export const createPathHierarchy = (media: MediaItem[]) : PathHierarchy => {
  const root = {
    'name': '/',
    children: {},
    items: []
  };

  media.forEach(
    m => {
      const pathParts = splitPath(m.clip);

      const parentDir = getPath(root, pathParts.slice(0, -1));

      parentDir.items.push({ ...m, localName: pathParts.slice(-1)[0] });
    }
  );

  return root;
};
