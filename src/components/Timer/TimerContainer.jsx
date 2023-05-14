import React, { Component } from 'react';
import { connect } from 'react-redux';

import { decrementSecondsThunk, setTimerOnOrOfThunk } from '../../ReduxToolkit/Slice/ListSlice';

import Timer from './Timer';

class TimerContainer extends Component {
  componentDidMount() {
    this.intervalId = setInterval(() => {
      if (this.props.timerOnOrOf && this.props.minutes + this.props.seconds > 0) {
        this.props.decrementSecondsThunk(this.props.id);
      } else {
        this.props.setTimerOnOrOfThunk(this.props.id, false);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    this.props.setTimerOnOrOfThunk(this.props.id, false);
  }

  render() {
    return <Timer {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { decrementSecondsThunk, setTimerOnOrOfThunk })(TimerContainer);
