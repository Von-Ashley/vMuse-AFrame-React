import {Entity} from 'aframe-react';
import React from 'react';
import Animation from './Animation'
import 'aframe-animation-component';


export default props => {
  const geometry = {
    primitive: 'ring',
    radiusInner: 0.01,
    radiusOuter: 0.016
  };
  const material = {
    color: props.color,
    shader: 'flat',
    opacity: props.opacity || 0.9,
    transparent: true
  };
  console.log(props)
  return (
    <Entity cursor={{'color': props.color, 'fuse':true, 'fuseTimeout': 3000}} geometry={geometry} material={material} position="0 0 -1">
      
    </Entity>    
);
}
 
 // <Animation attribute='scale' dur='1500' begin='fusing' to="0.1 0.1 0.1" easing="ease-in" fill="forwards" from="1 1 1"/>
