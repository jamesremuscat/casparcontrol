import { describe, test, expect } from 'vitest';
import { MediaItem } from '@/modules/caspar';
import { createPathHierarchy, PathHierarchy } from '../functions';

interface Expectation {
  media: MediaItem[],
  paths: PathHierarchy
}

describe('Server browser functions', () => {
  test('createPathHierarchy', () => {

    const expectations: Expectation[] = [
      {
        media: [],
        paths: {
          name: '/',
          children: [],
          items: []
        }
      }
    ];

    expectations.forEach(
      ({ media, paths }) => {
        expect(createPathHierarchy(media)).toEqual(paths);
      }
    );

  });
});
