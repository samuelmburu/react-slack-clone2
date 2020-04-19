import React from 'react';
import {
  Grid,
  GridColumn,
  GridRow,
  Header,
  HeaderContent,
  Icon,
  Dropdown,
} from 'semantic-ui-react';
import styled from 'styled-components';

import firebase from '../../firebase';
import * as constants from '../../constants';

const StyledGrid = styled(Grid)`
  background: ${constants.DEFAULT_BACKGROUND};
`;
const StyledGridRow = styled(GridRow)`
  padding: 1.2em;
  margin: 0;
`;

function UserPanel() {
  function dropdownOptions() {
    return [
      {
        key: 'user',
        text: (
          <span>
            Signed in as <strong>User</strong>
          </span>
        ),
        disabled: true,
      },
      {
        key: 'avatar',
        text: <span>Change Avatar</span>,
      },
      {
        key: 'signout',
        text: <span onClick={handleSignout}>Sign Out</span>,
      },
    ];
  }

  function handleSignout() {
    firebase
      .auth()
      .signOut()
      .then(() => console.log('signed out!!'));
  }

  return (
    <StyledGrid>
      <GridColumn>
        <StyledGridRow>
          {/* App Header */}
          <Header inverted floated="left" as="h2">
            <Icon name="code" />
            <HeaderContent>DevChat</HeaderContent>
          </Header>
        </StyledGridRow>

        {/* User dropdown */}
        <Header>
          <Dropdown trigger={<span>User</span>} options={dropdownOptions()} />
        </Header>
      </GridColumn>
    </StyledGrid>
  );
}

export { UserPanel };
