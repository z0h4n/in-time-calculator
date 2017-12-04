import React from 'react';
import style from './style.css';

const dayTypes = ['Working', 'Non-Working'];

class DayType extends React.PureComponent {
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
      <div id={style.dayTypeContainer}>
        <label id={style.dayTypeLabel}>Day Type</label>
        <select
          onChange={this.onDayTypeSelect}>
          {this.dayTypes()}
        </select>
      </div>
    );
  }
}

export default DayType;