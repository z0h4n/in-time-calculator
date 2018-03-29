import React from 'react';
import style from './style.css';

const url = 'https://chrome.google.com/webstore/detail/greythr-in-time-calculato/pibjjcefimcnabkdhabbbeknndpjedgd?hl=en-US';

class UseCRX extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  close() {
    this.setState({ visible: false });
  }

  render() {
    return !this.state.visible ? null : (
      <div className={style.crx}>
        Hi There. Thank you for using this Tool.<br />
        I've now developed a Google Chrome Extension for the same.<br /><br />
        No more copy pasting data.<br />
        Just install the extension and login to the portal.<br /><br />
        <a href={url} target={'_blank'}>Click here to get the extension.</a>
        <div className={style.closeBtn} onClick={this.close.bind(this)}>x</div>
      </div>
    )
  }
}

export default UseCRX;