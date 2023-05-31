import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setFilterThunk } from '../../ReduxToolkit/Slice/ListSlice';
import { getFilter } from '../../ReduxToolkit/Selectors/ListSelector';

import TaskFilter from './TaskFilter';

const TaskFilterContainer = (props) => {
  return <TaskFilter {...props} />;
};

const mapStateToProps = (state) => {
  return {
    Filter: getFilter(state),
  };
};

export default connect(mapStateToProps, { setFilterThunk })(TaskFilterContainer);
