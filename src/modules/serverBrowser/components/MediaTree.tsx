import { useState } from 'react';
import styled from 'styled-components/macro';
import { AiOutlineFolder, AiOutlineFolderOpen } from 'react-icons/ai';

import { PathHierarchy } from '../functions';

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

const ItemsList = styled.ul``;

const HeaderInner = styled.h4`
  margin: 0.5em;
  margin-left: 2em;
  position: relative;
  cursor: pointer;

  & > svg {
    position: absolute;
    left: -2em;
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
                hierarchy.items.map(
                  m => (
                    <li key={m.clip}>{m.localName}</li>
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
