import React from 'react';
import DeleteButton from './../DeleteButton'
import style from './style.css';

class DataTable extends React.PureComponent {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  getCols(row) {
    return row.map((col, i) => <td key={i}>{col}</td>);
  }

  getRows() {
    const rows = this.props.data;
    return rows.map((row, i) => <tr key={i}>
      <DeleteButton index={i} onDelete={this.delete} />
      {this.getCols(row)}
    </tr>);
  }

  delete(index) {
    const data = this.props.data.filter((swipe, i) => {
      return i !== index ? swipe.map(str => str) : false;
    });
    this.props.onRowDelete(data);
  }

  render() {
    return this.props.data ? (
      <div id={style.dataTable}>
        <table>
          <tbody>
            {this.getRows()}
          </tbody>
        </table>
      </div>
    ) : null;
  }
}

export default DataTable;