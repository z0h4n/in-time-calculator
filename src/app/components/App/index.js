import React from 'react';
import Warning from './../Warning';
import DayType from './../DayType';
import UserInput from './../UserInput';
import TimeDisplay from './../TimeDisplay';
import UseCRX from './../UseCRX';

class App extends React.Component {
  constructor() {
    super();

    this.state = { data: null, dayType: 'working', currentTime: Date.now() };

    this.onUserInput = this.onUserInput.bind(this);
    this.onDayTypeChange = this.onDayTypeChange.bind(this);
    this.onRowDelete = this.onRowDelete.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  render() {
    return (
      <div>
        <UseCRX />
        <Warning currentTime={this.state.currentTime} />
        <DayType onChange={this.onDayTypeChange} />
        <UserInput onInput={this.onUserInput} onDelete={this.onRowDelete} data={this.state.data || null} />
        <TimeDisplay {...this.state} />
      </div>
    )
  }

  onUserInput(e) {
    const userInput = e.target.value.trim() || null;
    const data = userInput ? userInput.split('\n').map(aSwipe => aSwipe.split('\t')) : null;

    this.setState({ data });
  }

  onRowDelete(data) {
    this.setState({ data });
  }

  onDayTypeChange(dayType) {
    this.setState({ dayType: dayType.split('-').join('').toLowerCase() });
  }

  tick() {
    this.setState({ currentTime: Date.now() });
  }
}

export default App;