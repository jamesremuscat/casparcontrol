import { MediaItem, MediaType, useCaspar } from '@/modules/caspar';
import { useMemo } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  min-height: 0;
  overflow-y: scroll;
`;

export const MediaList = () => {

  const media = useCaspar(state => state.media);

  const mediaByType = useMemo<Record<MediaType, MediaItem[]>>(
    () => {
      const sorted = {
        [MediaType.AUDIO]: [] as MediaItem[],
        [MediaType.MOVIE]: [] as MediaItem[],
        [MediaType.STILL]: [] as MediaItem[],
      };

      media.forEach(
        m => {
          sorted[m.type].push(m);
        }
      );

      return sorted;
    },
    [media]
  );

  return (
    <Container>
      <h4>Audio</h4>
      {
        mediaByType[MediaType.AUDIO].map(
          m => (
            <li key={m.clip}>{m.clip}</li>
          )
        )
      }
      <h4>Video</h4>
      {
        mediaByType[MediaType.MOVIE].map(
          m => (
            <li key={m.clip}>{m.clip}</li>
          )
        )
      }
      <h4>Still</h4>
      {
        mediaByType[MediaType.MOVIE].map(
          m => (
            <li key={m.clip}>{m.clip}</li>
          )
        )
      }
    </Container>
  );
};
