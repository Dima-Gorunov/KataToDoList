import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {
  setTimerOnOrOf(id, value) {
    this.props.setTimerOnOrOfThunk(id, value);
  }

  render() {
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
        <button
          onClick={() => this.setTimerOnOrOf(this.props.id, true)}
          disabled={this.props.completed}
          className="icon icon-play"
        />
        <button
          onClick={() => this.setTimerOnOrOf(this.props.id, false)}
          disabled={this.props.completed}
          className="icon icon-pause"
        />
        {`${this.props.minutes}:${this.props.seconds}`}
        {this.props.timerOnOrOf ? 'on' : 'of'}
      </span>
    );
  }
}

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
