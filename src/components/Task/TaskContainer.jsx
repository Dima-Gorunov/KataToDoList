import React from 'react';
import { connect } from 'react-redux';

import {
  changeEditingList,
  confirmEditingThunk,
  deleteListThunk,
  setCompleteThunk,
  setEditingThunk,
  setTimerOnOrOfThunk,
  updateShowLists,
} from '../../ReduxToolkit/Slice/ListSlice';
import { getLists } from '../../ReduxToolkit/Selectors/ListSelector';

import Task from './Task';

const TaskContainer = (props) => {
  return <Task {...props} />;
};

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
  setTimerOnOrOfThunk,
})(TaskContainer);
