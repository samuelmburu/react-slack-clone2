import React from 'react';
import {Grid, GridColumn} from 'semantic-ui-react';

import {ColorPanel} from './components/ColorPanel/ColorPanel';
import {MetaPanel} from './components/MetaPanel/MetaPanel';
import {SidePanel} from './components/SidePanel/SidePanel';
import {Messages} from './components/Messages/Messages';
import './App.css';

function App(props) {
  return (
    <Grid columns="equal" className="app" style={{background: '#eee'}}>
      <ColorPanel />
      <SidePanel />
      
      <GridColumn style={{marginLeft: 320}} >
        <Messages />
      </GridColumn>
      
      <GridColumn width={4}>
        <MetaPanel />
      </GridColumn>
    </Grid>
  );
}

export { App };
