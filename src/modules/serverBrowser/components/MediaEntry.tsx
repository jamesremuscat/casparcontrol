import styled from 'styled-components/macro';
import { AugmentedMediaItem } from '../functions';
import { MediaItem, TYPE_ICONS } from '@/modules/caspar';

interface Props {
  item: AugmentedMediaItem,
  onClick: (item: MediaItem) => void
}

const Inner = styled.li`
  display: flex;
  align-content: center;

  white-space: nowrap;
  text-overflow: ellipsis;

  margin-bottom: 0.25em;

  padding: 0.125em;

  cursor: pointer;

  &:hover {
    background-color: #E0E0E0;
  }

  & > svg {
    margin-right: 0.5em;
    height: 16px;
    width: 16px;
    flex: 0 0 auto;
  }
`;



export const MediaEntry = ({ item, onClick }: Props) => {

  const Icon = TYPE_ICONS[item.type];

  return (
    <Inner
      onClick={() => onClick(item)}
    >
      <Icon
        title={item.type}
      />
      {item.localName}
    </Inner>
  );
};
