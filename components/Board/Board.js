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
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
  }

  render() {
    const winner = calculateWinner(this.state.squares);

    let status;
    status = winner ? 'Winner: ' + winner
                    : 'Next player: '
                    + (this.state.xIsNext ? 'X' : 'O');

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

    if(calculateWinner(squares) || squares[i]) { return; }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
