import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterListsThunk, setFilterThunk } from '../../ReduxToolkit/Slice/ListSlice';
import { getFilter } from '../../ReduxToolkit/Selectors/ListSelector';

import TaskFilter from './TaskFilter';

class TaskFilterContainer extends Component {
  render() {
    return <TaskFilter {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    Filter: getFilter(state),
  };
};

export default connect(mapStateToProps, { setFilterThunk })(TaskFilterContainer);
