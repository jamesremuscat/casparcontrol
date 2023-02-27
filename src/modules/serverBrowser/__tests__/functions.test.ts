import { describe, test, expect } from 'vitest';
import { MediaItem, MediaType } from '@/modules/caspar';
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
          children: {},
          items: []
        }
      },
      {
        media: [
          {
            clip: 'TOPDIR/NEXTDIR/FILE.MOV',
            datetime: '1677494687',
            framerate: '1/25',
            frames: '250',
            size: '123456',
            type: MediaType.MOVIE
          }
        ],
        paths: {
          name: '/',
          items: [],
          children: {
            'TOPDIR': {
              name: 'TOPDIR',
              items: [],
              children: {
                'NEXTDIR': {
                  name: 'NEXTDIR',
                  children: {},
                  items: [
                    {
                      clip: 'TOPDIR/NEXTDIR/FILE.MOV',
                      datetime: '1677494687',
                      framerate: '1/25',
                      frames: '250',
                      size: '123456',
                      type: MediaType.MOVIE
                    }
                  ]
                }
              }
            }
          }
        }
      },
      {
        media: [
          {
            clip: 'TOPLEVELFILE.MOV',
            datetime: '1677494687',
            framerate: '1/25',
            frames: '250',
            size: '123456',
            type: MediaType.MOVIE
          },
          {
            clip: 'TOPDIR/NEXTDIR/FILE.MOV',
            datetime: '1677494687',
            framerate: '1/25',
            frames: '250',
            size: '123456',
            type: MediaType.MOVIE
          }
        ],
        paths: {
          name: '/',
          items: [{
            clip: 'TOPLEVELFILE.MOV',
            datetime: '1677494687',
            framerate: '1/25',
            frames: '250',
            size: '123456',
            type: MediaType.MOVIE
          }],
          children: {
            'TOPDIR': {
              name: 'TOPDIR',
              items: [],
              children: {
                'NEXTDIR': {
                  name: 'NEXTDIR',
                  children: {},
                  items: [
                    {
                      clip: 'TOPDIR/NEXTDIR/FILE.MOV',
                      datetime: '1677494687',
                      framerate: '1/25',
                      frames: '250',
                      size: '123456',
                      type: MediaType.MOVIE
                    }
                  ]
                }
              }
            }
          }
        }
      },
    ];

    expectations.forEach(
      ({ media, paths }) => {
        expect(createPathHierarchy(media)).toEqual(paths);
      }
    );

  });
});
