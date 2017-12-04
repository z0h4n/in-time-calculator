import React from 'react';
import SystemClock from './../SystemClock';
import style from './style.css';

const warningText = 'Please make sure your system clock is in synchronization with the punch machine clock for accurate results';

class Warning extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.warning}>
        {warningText}
        <SystemClock currentTime={this.props.currentTime} />
      </div>
    )
  }
}

export default Warning;