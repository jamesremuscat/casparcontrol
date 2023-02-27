import { useState } from 'react';
import styled from 'styled-components/macro';
import { AiOutlineFolder, AiOutlineFolderOpen } from 'react-icons/ai';

import { PathHierarchy } from '../functions';
import { MediaEntry } from './MediaEntry';

interface Props {
  hierarchy: PathHierarchy,
  isRoot?: boolean,
  level?: number
}

interface ContainerProps {
  level: number
}


const ChildContainer = styled.div``;

const Container = styled.div<ContainerProps>`
  margin-left: ${props => props.level * 0.25}em;
  padding-left: 0.25em;

  & ${ChildContainer} {
    border-left: ${ props => props.level === 0 ? 'none' : '2px solid #C0C0C0'};
  }
`;

const ItemsList = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0.25em;
`;

const HeaderInner = styled.h4`
  margin-top: 0.5em;
  margin-bottom: 0.25em;
  margin-left: 1em;
  position: relative;
  cursor: pointer;

  & > svg {
    position: absolute;
    left: -1.5em;
  }
`;

interface HeaderProps {
  expanded?: boolean,
  name: string,
  onClick?: () => void
}

const Header = ({ expanded, name, onClick }: HeaderProps) => (
  <HeaderInner
    onClick={onClick}
  >
    { expanded ? <AiOutlineFolderOpen /> : <AiOutlineFolder /> }
    {name}
  </HeaderInner>
);

const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

export const MediaTree = ({ hierarchy, isRoot, level=0 }: Props) => {

  const [ expanded, setExpanded ] = useState<boolean>(!!isRoot);

  return (
    <Container level={level}>
      {
        !isRoot && (
          <Header
            expanded={expanded}
            name={hierarchy.name}
            onClick={() => setExpanded(e => !e)}
          />
        )
      }
      <ChildContainer>
        {
          expanded && (
            Object.values(hierarchy.children).map(
              h => (
                <MediaTree
                  hierarchy={h}
                  key={h.name}
                  level={level + 1}
                />
              )
            )
          )
        }
        {
          expanded && (
            <ItemsList>
              {
                hierarchy.items.sort((a, b) => collator.compare(a.localName, b.localName)).map(
                  m => (
                    <MediaEntry
                      item={m}
                      key={m.clip}
                    />
                  )
                )
              }
            </ItemsList>
          )
        }
      </ChildContainer>
    </Container>
  );
};
