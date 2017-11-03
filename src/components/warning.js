import React from 'react';
import SystemClock from './system-clock';

const warningText = 'Please make sure your system clock is in synchronization with the punch machine clock for accurate results';

export default class Warning extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='warning'>
        {warningText}
        <SystemClock currentTime={this.props.currentTime} />
      </div>
    )
  }
}