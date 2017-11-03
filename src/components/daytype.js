import React from 'react';

const dayTypes = ['Working', 'Non-Working'];

export default class DayType extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onDayTypeSelect = this.onDayTypeSelect.bind(this);
  }

  onDayTypeSelect(e) {
    this.props.onChange(e.target.value);
  }

  dayTypes() {
    return dayTypes.map((type, i) => <option key={i}>{type}</option>);
  }

  render() {
    return (
      <div id='dayTypeContainer'>
        <label id='dayTypeLabel'>Day Type</label>
        <select
          onChange={this.onDayTypeSelect}>
          {this.dayTypes()}
        </select>
      </div>
    );
  }
}