import React from 'react';

const INVERSE_DIRECTION = {
  left: 'right',
  right: 'left',
  top: 'bottom',
  bottom: 'top'
};

const BORDER_COLOR_PROP = {
  left: 'borderLeftColor',
  right: 'borderRightColor',
  top: 'borderTopColor',
  bottom: 'borderBottomColor'
};

export default function ({ size, color, direction }) {
  const style = {
    position: 'absolute',
    width: '0px',
    height: '0px',
    borderColor: 'transparent',
    borderWidth: `${size * 0.5}px`,
    borderStyle: 'solid'
  };

  const direction_inv = INVERSE_DIRECTION[direction];

  style[BORDER_COLOR_PROP[direction_inv]] = color;
  style[direction_inv] = '100%';

  return <div style={style} />
}