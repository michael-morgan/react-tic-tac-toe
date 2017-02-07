import React, { PropTypes } from 'react';
import cx from 'classnames';
import Square from '../Square';
import s from './Board.css';

class Board extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null)
    };
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
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

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }
}

export default Board;
