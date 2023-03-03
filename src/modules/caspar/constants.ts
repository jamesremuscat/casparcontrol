import { AiOutlinePicture, AiOutlineSound } from 'react-icons/ai';
import { IoFilmOutline } from 'react-icons/io5';
import { MediaType } from './state';

export const TYPE_ICONS = {
  [MediaType.AUDIO]: AiOutlineSound,
  [MediaType.STILL]: AiOutlinePicture,
  [MediaType.MOVIE]: IoFilmOutline
};
