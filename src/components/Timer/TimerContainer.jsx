import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { decrementSecondsThunk, incrementSecondsThunk, setTimerOnOrOfThunk } from '../../ReduxToolkit/Slice/ListSlice';

import Timer from './Timer';

const TimerContainer = (props) => {
  useEffect(() => {
    let intervalId = null;

    if (props.timerOnOrOf) {
      intervalId = setInterval(() => {
        if (props.timerOnOrOf && props.minutes + props.seconds > 0 && !props.inc) {
          props.decrementSecondsThunk(props.id);
        } else {
          if (props.timerOnOrOf && props.inc) {
            props.incrementSecondsThunk(props.id);
          } else {
            props.setTimerOnOrOfThunk(props.id, false);
          }
        }
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [props.timerOnOrOf, props.seconds, props.minutes]);

  return <Timer {...props} />;
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { decrementSecondsThunk, incrementSecondsThunk, setTimerOnOrOfThunk })(
  TimerContainer
);
