import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity>
    <Entity position="0 0 0"rotation="0 180 0" camera look-controls wasd-controls hmdEnabled reverseMouseDrag {...props}/>
  </Entity>
);
