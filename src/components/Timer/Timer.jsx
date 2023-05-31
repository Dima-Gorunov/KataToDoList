import React from 'react';
import PropTypes from 'prop-types';

const Timer = (props) => {
  const setTimerOnOrOf = (id, value) => {
    props.setTimerOnOrOfThunk(id, value);
  };

  return (
    <span
      className="description"
      style={{
        display: 'flex',
        width: '100px',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginLeft: 'auto',
        marginRight: '20px',
      }}
    >
      <button onClick={() => setTimerOnOrOf(props.id, true)} disabled={props.completed} className="icon icon-play" />
      <button onClick={() => setTimerOnOrOf(props.id, false)} disabled={props.completed} className="icon icon-pause" />
      {`${props.minutes}:${props.seconds}`}
      {props.timerOnOrOf ? 'on' : 'of'}
    </span>
  );
};

Timer.propTypes = {
  id: PropTypes.string,
  completed: PropTypes.bool,
  editing: PropTypes.bool,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
};

Timer.defaultProps = {
  id: '',
  completed: false,
  editing: false,
  minutes: 0,
  seconds: 0,
};

export default Timer;
