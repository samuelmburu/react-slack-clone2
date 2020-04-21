import React, { useState } from 'react';
import { Menu, Icon, Modal, Form, Input, Button } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledMenu = styled(Menu.Menu)`
  paddingbottom: 2em;
`;

function Channels() {
  const [channels, setChannels] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [channelName, setChannelName] = useState('');
  const [channelDetails, setChannelDetails] = useState('');

  function closeModal(e) {
    e.preventDefault();

    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function handleModalInputChange(e) {
    const fnToCall =
      e.target.name === 'channelName' ? setChannelName : setChannelDetails;

    fnToCall(e.target.value);
  }

  return (
    <>
      <StyledMenu style={{ paddingBottom: '2em' }}>
        <Menu.Item>
          <span>
            <Icon name="exchange" />
            CHANNELS
          </span>
          ({channels.length})
          {/*
          FIXME: stying here below is janky
        */}
          <span onClick={openModal} role="button">
            <Icon name="add" />
          </span>
        </Menu.Item>
        {/* Show all channels here */}
      </StyledMenu>

      {/* Add channel modal */}
      <Modal basic open={isModalOpen} onClose={closeModal}>
        <Modal.Header>Add a Channel</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <Input
                fluid
                label="Name of Channel"
                name="channelName"
                value={channelName}
                onChange={handleModalInputChange}
              />
            </Form.Field>
            <Form.Field>
              <Input
                fluid
                label="Channel details"
                name="channelDetails"
                value={channelDetails}
                onChange={handleModalInputChange}
              />
            </Form.Field>
          </Form>
        </Modal.Content>

        <Modal.Actions>
          <Button color="green" inverted>
            <Icon name="checkmark" />
            Add
          </Button>
          <Button color="red" inverted onClick={closeModal}>
            <Icon name="remove" />
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

export { Channels };
