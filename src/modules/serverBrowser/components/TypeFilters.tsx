import { MediaItem, MediaType } from '@/modules/caspar';
import styled from 'styled-components/macro';

const Container = styled.div`
  flex: 0 0 auto;
  background-color: red;

  display: flex;
  flex-direction: column;
`;

interface FilterProps {
  active: boolean
}

const Filter = styled.button<FilterProps>`
  flex-grow: 1;

  color: ${ props => props.active ? 'red' : 'black' };
`;

export interface FilterOption {
  caption: string,
  filter: (m: MediaItem) => boolean
}

export const FilterOptions: Record<string, FilterOption> = {
  ALL: {
    caption: 'All',
    filter: (m: MediaItem) => true
  },
  MOVIE: {
    caption: 'Video',
    filter: (m: MediaItem) => m.type === MediaType.MOVIE
  },
  IMAGE: {
    caption: 'Images',
    filter: (m: MediaItem) => m.type === MediaType.STILL
  },
  AUDIO: {
    caption: 'Audio',
    filter: (m: MediaItem) => m.type === MediaType.AUDIO
  },
};

interface Props {
  filter: FilterOption,
  setFilter: (f: FilterOption) => void
}

export const TypeFilters = ({ filter, setFilter } : Props) => (
  <Container>
    {
      Object.values(FilterOptions).map(
        (f, idx) => {
          return (
            <Filter
              active={filter === f}
              key={idx}
              onClick={() => setFilter(f)}
            >
              {f.caption}
            </Filter>
        );
          }
      )
    }
  </Container>
);
