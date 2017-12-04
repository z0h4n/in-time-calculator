import React from 'react';
import { hrsToMsecs, toTimeString } from './../../utils/';
import style from './style.css';

const hourTypes = {
  working: { hours: [11.5, 8.5, 4.5, 0], classes: [style.compoff, style.fullday, style.halfday, style.absent] },
  nonworking: { hours: [6, 0], classes: [style.fullday_compoff, style.absent] }
};

class TimeDisplay extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const actualInTime = this.props.data && this.props.data.length ? Math.max(this.getInTime(), 0) : 0;
    const { classes, hours } = hourTypes[this.props.dayType];
    const index = hours.map(hrs => hrsToMsecs(hrs)).findIndex(t => actualInTime >= t);

    return (
      <h1 id={style.timeDisplay} className={classes[index]}>
        {toTimeString(actualInTime)}
      </h1>
    )
  }

  getInTime() {
    const swipes = this.props.data;
    const inSwipes = [];
    const outSwipes = [];
    let inTime = 0;

    swipes.forEach(aSwipe => {
      if (aSwipe[2] === 'In') {
        inSwipes.push(new Date(aSwipe[1]));
      } else if (aSwipe[2] === 'Out') {
        outSwipes.push(new Date(aSwipe[1]));
      }
    });

    const swipeCount = Math.min(outSwipes.length, inSwipes.length);

    for (let i = 0; i < swipeCount; i++) {
      inTime += outSwipes[i].getTime() - inSwipes[i].getTime()
    }

    return inTime + this.getLatestTime();
  }

  getLatestTime() {
    const lastSwipe = this.props.data[this.props.data.length - 1];
    return lastSwipe[2] === 'In' ? this.props.currentTime - new Date(lastSwipe[1]).getTime() : 0;
  }
}

export default TimeDisplay;