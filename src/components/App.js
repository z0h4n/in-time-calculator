import React from 'react';
import { SevenSegmentDisplay } from '@Components';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { swipes: [] };
  }

  render() {
    return <SevenSegmentDisplay />
  }
}