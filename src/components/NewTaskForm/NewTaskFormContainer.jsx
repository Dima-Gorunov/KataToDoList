import React from 'react';
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

const NewTaskFormContainer = (props) => {
  return <NewTaskForm {...props} />;
};

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
