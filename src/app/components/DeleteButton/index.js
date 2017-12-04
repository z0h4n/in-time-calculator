import React from 'react';

class DeleteButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete() {
    this.props.onDelete(this.props.index);
  }

  render() {
    return (
      <td>
        <button onClick={this.delete}>Delete</button>
      </td>
    )
  }
}

export default DeleteButton;