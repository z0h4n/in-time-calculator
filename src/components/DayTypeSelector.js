import React from 'react';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

export default function DayTypeSelector(props) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '10px' }}>
      <ToggleButtonGroup defaultValue={0} type="radio" name="daytype" onChange={props.onDayTypeChange}>
        <ToggleButton value={0}>Working</ToggleButton>
        <ToggleButton value={1}>Non-Working</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}