import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getInputText } from '../../ReduxToolkit/Selectors/ListSelector';
import { addListThunk, setInputTextThunk } from '../../ReduxToolkit/Slice/ListSlice';

import NewTaskForm from './NewTaskForm';

class NewTaskFormContainer extends Component {
  render() {
    return <NewTaskForm {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    inputText: getInputText(state),
  };
};

export default connect(mapStateToProps, {
  setInputTextThunk,
  addListThunk,
})(NewTaskFormContainer);
