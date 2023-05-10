import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  changeEditingList,
  confirmEditing,
  confirmEditingThunk,
  deleteListThunk,
  setCompleteThunk,
  setEditingThunk,
  updateShowLists,
} from '../../ReduxToolkit/Slice/ListSlice';
import { getLists } from '../../ReduxToolkit/Selectors/ListSelector';

import Task from './Task';

class TaskContainer extends Component {
  render() {
    return <Task {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    Lists: getLists(state),
  };
};

export default connect(mapStateToProps, {
  setCompleteThunk,
  deleteListThunk,
  setEditingThunk,
  changeEditingList,
  confirmEditingThunk,
  updateShowLists,
})(TaskContainer);
