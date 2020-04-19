import * as React from 'react';

import { Loader, Dimmer } from 'semantic-ui-react';

function Spinner() {
  return (
    <Dimmer inverted active blurring page>
      <Loader active size="huge" content="Loading..." />
    </Dimmer>
  );
}

export { Spinner };
