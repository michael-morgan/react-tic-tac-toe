import React, { PropTypes } from 'react';
import cx from 'classnames';
import Board from '../Board';
import s from './Game.css';

class Game extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div className={cx(s.game, this.props.className)}>
        <div className={cx(s['game-board'], this.props.className)}>
          <Board />
        </div>
        <div className={cx(s['game-info'], this.props.className)}>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
