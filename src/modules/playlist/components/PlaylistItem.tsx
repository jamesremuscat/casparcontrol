import { TYPE_ICONS } from '@/modules/caspar';
import styled from 'styled-components/macro';
import { PlaylistItem, MediaPlaylistItem } from '../state';

const Inner = styled.div`

  border: 2px solid blue;
  border-radius: 0.5em;

  padding: 0.5em;

  margin-bottom: 0.5em;

  display: grid;
  grid-template-columns: 3em minmax(0, 1fr) auto auto;
  grid-template-rows: repeat(2, minmax(0, 1fr));
`;

const Icon = styled.div`
  grid-column: 1;
  grid-row: 1 / span 2;
  justify-self: center;
  align-self: center;

  & > svg {
    width: 2em;
    height: 2em;
  }
`;

const Title = styled.h4`
  margin: 0;
  grid-row: 1;
  grid-column: 2;
`;

const LayerControls = styled.div`
  grid-row: 1 / span 2;
  grid-column: 3;
`;

interface Props {
  item: PlaylistItem
}

const isMedia = (x: PlaylistItem): x is MediaPlaylistItem => (x as MediaPlaylistItem).media !== undefined;

export const RenderedPlaylistItem = ({ item }: Props) => {

  const InnerType = isMedia(item) ? RenderedMediaPlaylistItem : null;

  if (InnerType) {
    return (
      <InnerType
        item={item as MediaPlaylistItem}
      />
    );
  }

  return null;

};


interface MediaProps {
  item: MediaPlaylistItem
}

const RenderedMediaPlaylistItem = ({ item }: MediaProps) => {

  const Icon = TYPE_ICONS[item.media.type];

  return (
    <RenderedPlaylistItemInner
      icon={<Icon />}
      item={item}
      title={item.media.clip}
    />
  );
};

interface InnerProps {
  icon?: React.ReactNode,
  item: PlaylistItem,
  title: string
}

const RenderedPlaylistItemInner = ({ icon, item, title }: InnerProps) => {
  return (
    <Inner>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
      <LayerControls>
        <p>Channel: {item.channel}</p>
        <p>Layer: {item.layer}</p>
      </LayerControls>
    </Inner>
  );
};
