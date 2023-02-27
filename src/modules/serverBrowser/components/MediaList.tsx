import { useCaspar } from '@/modules/caspar';
import { useMemo, useState } from 'react';
import styled from 'styled-components/macro';
import { createPathHierarchy, PathHierarchy } from '../functions';
import { MediaTree } from './MediaTree';
import { FilterOption, FilterOptions, TypeFilters } from './TypeFilters';

const Container = styled.div`
  display: flex;
  min-height: 0;
  height: 100%;
  width: 100%;
`;

const MediaPane = styled.div`
  min-height: 0;
  overflow-y: scroll;
  flex-grow: 1;

  padding: 0.25em;
`;


export const MediaList = () => {

  const media = useCaspar(state => state.media);
  const [filter, setFilter] = useState<FilterOption>(FilterOptions.ALL);

  const filteredMediaTree = useMemo<PathHierarchy>(
    () => {
      return createPathHierarchy(media.filter(filter.filter));
    },
    [filter, media]
  );

  return (
    <Container>
      <TypeFilters
        filter={filter}
        setFilter={setFilter}
      />
      <MediaPane>
        <MediaTree
          hierarchy={filteredMediaTree}
          isRoot
        />
      </MediaPane>
    </Container>
  );
};
