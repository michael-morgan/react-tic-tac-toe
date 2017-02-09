import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Square.css';

function Square(props) {
  return (
    <button className={s.square} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
