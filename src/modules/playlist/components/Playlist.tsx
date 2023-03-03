import styled from 'styled-components/macro';
import { usePlaylist } from '../playlist';
import { RenderedPlaylistItem } from './PlaylistItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.5em;

  min-height: 0;
`;

const ItemsList = styled.div`
  flex-grow: 1;
  min-height: 0;
  overflow-y: scroll;
`;


export const Playlist = () => {

  const items = usePlaylist(state => state.items);

  return (
    <Container>
      <ItemsList>
        {
          items.map(
            (i, idx) => (
              <RenderedPlaylistItem
                item={i}
                key={idx}
              />
            )
          )
        }
      </ItemsList>
      {items.length} item(s)
    </Container>
  );
};
