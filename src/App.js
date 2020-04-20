import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { ColorPanel } from './components/ColorPanel/ColorPanel';
import { MetaPanel } from './components/MetaPanel/MetaPanel';
import { SidePanel } from './components/SidePanel/SidePanel';
import { Messages } from './components/Messages/Messages';

import './App.css';

const StyledGrid = styled(Grid)`
  background: #eee;
`;

function App(props) {
  const { currentUser } = props;

  return (
    <StyledGrid columns="equal" className="app">
      <ColorPanel />
      <SidePanel currentUser={currentUser} />

      <GridColumn style={{ marginLeft: 320 }}>
        <Messages />
      </GridColumn>

      <GridColumn width={4}>
        <MetaPanel />
      </GridColumn>
    </StyledGrid>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.user.currentUser,
  };
}

const ConnectedApp = connect(
  mapStateToProps,
  () => {},
)(App);

export { ConnectedApp as App };
