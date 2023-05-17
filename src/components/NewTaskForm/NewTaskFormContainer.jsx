import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getInputMin,
  getInputSec,
  getInputText,
  getMinutes,
  getSeconds,
} from '../../ReduxToolkit/Selectors/ListSelector';
import { addListThunk, setInputMin, setInputSec, setInputTextThunk } from '../../ReduxToolkit/Slice/ListSlice';

import NewTaskForm from './NewTaskForm';

class NewTaskFormContainer extends Component {
  render() {
    return <NewTaskForm {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    InputText: getInputText(state),
    InputMin: getInputMin(state),
    InputSec: getInputSec(state),
    Minutes: getMinutes(state),
    Seconds: getSeconds(state),
  };
};

export default connect(mapStateToProps, {
  setInputTextThunk,
  addListThunk,
  setInputMin,
  setInputSec,
})(NewTaskFormContainer);
