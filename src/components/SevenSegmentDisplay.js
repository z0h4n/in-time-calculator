import React from 'react';
import HSegment from './HSegment';
import VSegment from './VSegment';

const SEGMENT_MAP = {
  "0": { a: true, b: true, c: true, d: true, e: true, f: true, g: false },
  "1": { a: false, b: true, c: true, d: false, e: false, f: false, g: false },
  "2": { a: true, b: true, c: false, d: true, e: true, f: false, g: true },
  "3": { a: true, b: true, c: true, d: true, e: false, f: false, g: true },
  "4": { a: false, b: true, c: true, d: false, e: false, f: true, g: true },
  "5": { a: true, b: false, c: true, d: true, e: false, f: true, g: true },
  "6": { a: true, b: false, c: true, d: true, e: true, f: true, g: true },
  "7": { a: true, b: true, c: true, d: false, e: false, f: false, g: false },
  "8": { a: true, b: true, c: true, d: true, e: true, f: true, g: true },
  "9": { a: true, b: true, c: true, d: true, e: false, f: true, g: true }
};

export default function (props) {
  const value = 0;
  const width = 40;
  const height = 5;
  const onColor = 'red';
  const offColor = 'transparent';

  const style = {
    container: {
      display: 'inline-block',
      width: `${width + (height * 2)}px`,
      margin: '20px'
    },
    vSegmentHolder: {
      position: 'relative',
      width: '100%',
      height: `${width}px`
    }
  };

  function onOff(segmentName) {
    return SEGMENT_MAP[`${value}`][segmentName] ? onColor : offColor;
  }

  return (
    <div style={style.container}>
      <HSegment width={width} height={height} color={onOff('a')} />
      <div style={style.vSegmentHolder}>
        <VSegment width={height} height={width} color={onOff('f')} align="left" />
        <VSegment width={height} height={width} color={onOff('b')} align="right" />
      </div>
      <HSegment width={width} height={height} color={onOff('g')} />
      <div style={style.vSegmentHolder}>
        <VSegment width={height} height={width} color={onOff('e')} align="left" />
        <VSegment width={height} height={width} color={onOff('c')} align="right" />
      </div>
      <HSegment width={width} height={height} color={onOff('d')} />
    </div>
  )
}