import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Component = React.Component;

// ----------------
// -- Components --
// ----------------
function Warning() {
  return (
    <div className='warning'>
      Please make sure your system clock is in synchronization with the punch machine clock for accurate results
    </div>
  )
}

function DayType(props) {
  return (
    <div className='dayTypeContainer'>
      <div className='radioContainer'>
        <input type='radio' name='dayselect' value='1' onClick={props.onClick} defaultChecked /> Working Day
      </div>
      <div className='radioContainer'>
        <input type='radio' name='dayselect' value='0' onClick={props.onClick} /> Non-Working Day
      </div>
    </div>
  )
}

class InTimeCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = { inTime: 0, isWeekDay: 1, lastSwipe: null };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleDayTypeChange = this.handleDayTypeChange.bind(this);
  }

  handleUserInput(e) {
    const userInput = e.target.value.trim();
    const swipes = userInput.split('\n').map(aSwipe => aSwipe.split('\t'));
    this.setState({
      inTime: this.getTotalInTime(swipes),
      lastSwipe: swipes.pop() || null
    });
  }

  handleDayTypeChange(e) {
    this.setState({ isWeekDay: +e.target.value });
  }

  render() {
    return (
      <div>
        <Warning />
        <DayType onClick={this.handleDayTypeChange} />
        <textarea placeholder='Paste your swipe data from greythr portal' onInput={this.handleUserInput} />
        <TimeDisplay {...this.state} />
      </div>
    )
  }

  getTotalInTime(swipes) {
    let inSwipes = [];
    let outSwipes = [];
    let inTime = 0;

    swipes.forEach(aSwipe => {
      if (aSwipe[2] === 'In') {
        inSwipes.push(new Date(aSwipe[1]));
      } else if (aSwipe[2] === 'Out') {
        outSwipes.push(new Date(aSwipe[1]));
      }
    });

    for (let i = 0; i < outSwipes.length; i++) {
      inTime += outSwipes[i].getTime() - inSwipes[i].getTime()
    }

    return inTime;
  }
}

class TimeDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: Date.now() };
    this.interval = null;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ currentTime: Date.now() });
    clearInterval(this.interval);
    if (nextProps.lastSwipe && nextProps.lastSwipe[2] === 'In') {
      this.interval = setInterval(() => {
        this.setState({ currentTime: Date.now() });
      }, 1000);
    }
  }

  render() {
    const actualInTime = this.props.inTime + this.getRemainingTime();
    let classes = this.props.isWeekDay ? ['compoff', 'fullday', 'halfday', 'absent'] : ['fullday-compoff', 'absent'];
    let hours = this.props.isWeekDay ? [11.5, 8.5, 4.5, 0] : [6, 0];
    const index = hours.map(hrs => hrsToMsecs(hrs)).findIndex(t => actualInTime >= t);
    return <h1 className={classes[index]}>{this.toTimeString(actualInTime)}</h1>
  }

  getRemainingTime() {
    return this.props.lastSwipe && this.props.lastSwipe[2] === 'In' ?
      this.state.currentTime - new Date(this.props.lastSwipe[1]).getTime() : 0;
  }

  toTimeString(time) {
    const hours = time / hrsToMsecs(1);
    const minutes = (hours - toInt(hours, 10)) * 60;
    const seconds = (minutes - toInt(minutes, 10)) * 60;

    let timeArray = [hours, minutes, seconds].map(value => toFixed2(toInt(value)));

    return timeArray.join(':');
  }
}

ReactDOM.render(<InTimeCalculator />, document.getElementById('root'));

// ----------------------
// -- Helper functions --
// ----------------------
function toInt(val) {
  return parseInt(val, 10);
}

function hrsToMsecs(val) {
  return val * 1000 * 60 * 60;
}

function toFixed2(val) {
  val = val.toString().split('');
  const valLength = val.length;

  if (valLength < 2) {
    for (let i = 0; i < (2 - valLength); i++) {
      val.unshift('0');
    }
  }

  return val.join('');
}