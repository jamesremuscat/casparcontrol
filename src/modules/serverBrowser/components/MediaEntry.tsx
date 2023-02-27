import styled from 'styled-components/macro';
import { AugmentedMediaItem } from '../functions';
import { MediaType } from '@/modules/caspar';
import { AiOutlinePicture, AiOutlineSound } from 'react-icons/ai';
import { IoFilmOutline } from 'react-icons/io5';

interface Props {
  item: AugmentedMediaItem
}

const Inner = styled.li`
  display: flex;
  align-content: center;

  white-space: nowrap;
  text-overflow: ellipsis;

  margin-bottom: 0.25em;

  & > svg {
    margin-right: 0.5em;
    height: 16px;
    width: 16px;
    flex: 0 0 auto;
  }
`;

const TYPE_ICONS = {
  [MediaType.AUDIO]: AiOutlineSound,
  [MediaType.STILL]: AiOutlinePicture,
  [MediaType.MOVIE]: IoFilmOutline
};

export const MediaEntry = ({ item }: Props) => {

  const Icon = TYPE_ICONS[item.type];

  return (
    <Inner>
      <Icon
        title={item.type}
      />
      {item.localName}
    </Inner>
  );
};
