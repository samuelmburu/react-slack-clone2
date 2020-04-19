import React from 'react';
import {Menu} from 'semantic-ui-react';
import styled from 'styled-components';

import * as constants from '../../constants';
import {UserPanel} from './UserPanel';

const StyledMenu = styled(Menu)`
    background: ${constants.DEFAULT_BACKGROUND}; // FIXME: background getting overridden probably issue with how styledComponents are rendering this
    fontSize: 1.2rem;
`;

function SidePanel(props) {
  return (
    <StyledMenu
        size="large"
        inverted   
        fixed="left"
        vertical
    >
        <UserPanel />
    </StyledMenu>
  );
}

export { SidePanel };
