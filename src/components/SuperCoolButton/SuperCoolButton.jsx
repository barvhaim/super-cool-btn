import React from 'react';
import 'carbon-components/css/carbon-components.min.css';
import { Button } from 'carbon-components-react';


const SuperCoolButton = ({title}) => {
  return (
      <Button kind={'primary'}>
        {title}
      </Button>
  );
};

export default SuperCoolButton;

