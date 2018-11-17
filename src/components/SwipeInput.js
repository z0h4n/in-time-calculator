import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

export default function SwipeInput(props) {
  return (
    <FormGroup controlId="formControlsTextarea">
      <FormControl
        componentClass="textarea"
        placeholder="Paste your swipes from greythr here"
        style={{ resize: 'none', height: '250px' }}
        onChange={props.onInput}/>
    </FormGroup>
  )
}