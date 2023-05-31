import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';

import { getFilter, getLists, getShowLists } from '../../ReduxToolkit/Selectors/ListSelector';
import { setLocalStorageListsThunk, updateShowLists } from '../../ReduxToolkit/Slice/ListSlice';

import TaskList from './TaskList';

const TaskListContainer = (props) => {
  useEffect(() => {
    props.updateShowLists();
    props.setLocalStorageListsThunk();
  }, [props.Lists, props.Filter]);

  return <TaskList {...props} />;
};

const mapStateToProps = (state) => {
  return {
    ShowLists: getShowLists(state),
    Lists: getLists(state),
    Filter: getFilter(state),
  };
};

export default connect(mapStateToProps, {
  updateShowLists,
  setLocalStorageListsThunk,
})(TaskListContainer);
