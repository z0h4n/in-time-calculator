import React from 'react';
import { prependZeros } from './../../utils/';
import style from './style.css';

class SystemClock extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const dateObj = new Date(this.props.currentTime || Date.now());

    let timeString = dateObj.toLocaleTimeString().split(':');
    timeString[0] = prependZeros(timeString[0]);
    timeString = timeString.join(':');

    return (
      <div id={style.clock}>
        <div id={style.clockLabel}>System Clock</div>
        <div id={style.clockTime}>{timeString}</div>
      </div>
    )
  }
}

export default SystemClock;