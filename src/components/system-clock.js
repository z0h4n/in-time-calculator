import React from 'react';
import { prependZeros } from './../utils';

export default class SystemClock extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const dateObj = new Date(this.props.currentTime || Date.now());

    let timeString = dateObj.toLocaleTimeString().split(':');
    timeString[0] = prependZeros(timeString[0]);
    timeString = timeString.join(':');

    return (
      <div id='clock'>
        <div id='clockLabel'>System Clock</div>
        <div id='clockTime'>{timeString}</div>
      </div>
    )
  }
}