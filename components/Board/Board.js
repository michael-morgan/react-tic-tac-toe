import React, { PropTypes } from 'react';
import cx from 'classnames';
import Square from '../Square';
import s from './Board.css';

class Board extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className={cx(s.status, this.props.className)}>{status}</div>
        <div className={cx(s['board-row'], this.props.className)}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={cx(s['board-row'], this.props.className)}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={cx(s['board-row'], this.props.className)}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
