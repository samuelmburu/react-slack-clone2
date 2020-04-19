import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import styled from 'styled-components';

import { ColorPanel } from './components/ColorPanel/ColorPanel';
import { MetaPanel } from './components/MetaPanel/MetaPanel';
import { SidePanel } from './components/SidePanel/SidePanel';
import { Messages } from './components/Messages/Messages';

import './App.css';

const StyledGrid = styled(Grid)`
  background: #eee;
`;

function App(props) {
  return (
    <StyledGrid columns="equal" className="app">
      <ColorPanel />
      <SidePanel />

      <GridColumn style={{ marginLeft: 320 }}>
        <Messages />
      </GridColumn>

      <GridColumn width={4}>
        <MetaPanel />
      </GridColumn>
    </StyledGrid>
  );
}

export { App };
