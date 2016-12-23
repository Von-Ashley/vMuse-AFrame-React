import {Entity} from 'aframe-react';
import React from 'react';

export default props => {

  return (
    <Entity 
        begin={props.begin} 
        // attribute="rotation"
        attribute={props.attribute}
        // to="0 360 0"
        to={props.to}
        easing={props.easing}
        dur={props.dur} 
        fill={props.fill}
        from={props.from}
    />
  );
}


// <Animation attribute="rotation" dur="5000" repeat="indefinite" to="0 360 360"/>
// <a-mixin id="cube-hovered" material="color: magenta"></a-mixin>
// <a-mixin id="green" material="color: green"></a-mixin>
// <a-animation begin="fusing" easing="ease-in" attribute="scale"
//              fill="forwards" from="1 1 1" to="0.1 0.1 0.1" dur="1500">
//              </a-animation>
// <a-animation begin="click" attribute="rotation" to="0 360 0"
//                    easing="linear" dur="2000" fill="backwards"></a-animation>