import React from 'react';
import {
  Grid,
  GridColumn,
  GridRow,
  Header,
  HeaderContent,
  Icon,
  Dropdown,
  Image,
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

function UserPanel(props) {
  const { currentUser } = props;

  function dropdownOptions() {
    return [
      {
        key: 'user',
        text: (
          <span>
            Signed in as <strong>{currentUser.displayName}</strong>
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
    firebase.auth().signOut();
  }

  return (
    <StyledGrid>
      <GridColumn>
        {/* App Header */}
        <StyledGridRow>
          <Header inverted floated="left" as="h2">
            <Icon name="code" />
            <HeaderContent>DevChat</HeaderContent>
          </Header>

          {/* User dropdown */}
          <Header>
            <Dropdown
              trigger={
                <span>
                  <Image
                    src={currentUser.photoURL}
                    spaced="right"
                    avatar
                    verticalAlign="middle"
                    size="mini"
                  />
                  {currentUser.displayName}
                </span>
              }
              options={dropdownOptions()}
            />
          </Header>
        </StyledGridRow>
      </GridColumn>
    </StyledGrid>
  );
}

export { UserPanel };
