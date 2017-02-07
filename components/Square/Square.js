import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Square.css';

class Square extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <button className={cx(s.square, this.props.className)}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
