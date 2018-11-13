import React from 'react';
import Arrow from './Arrow';

export default function({ width, height, color, align }) {
  const style = {
    position: 'absolute',
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color
  };

  if (align === 'left') {
    style.left = '0px';
  } else {
    style.right = '0px';
  }

  return (
    <div style={style}>
      <Arrow size={width} color={color} direction="top" />
      <Arrow size={width} color={color} direction="bottom" />
    </div>
  )
}