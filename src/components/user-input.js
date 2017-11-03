import React from 'react';
import DataTable from './data-table';

const textAreaText = 'Paste your swipe data from greythr portal';

export default class UserInput extends React.PureComponent {
  constructor(props) {
    super(props)
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown(e) {
    if (e.key === 'Tab') {
      e.target.value += '\t';
      e.preventDefault();
    }
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '10px', height: '300px' }}>
        <textarea
          id='textarea'
          placeholder={textAreaText}
          onInput={this.props.onInput}
          onKeyDown={this.onKeyDown}
        />
        <DataTable data={this.props.data || null} onRowDelete={this.props.onDelete} />
      </div>
    )
  }
}