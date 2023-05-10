import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFilter, getLists, getShowLists } from '../../ReduxToolkit/Selectors/ListSelector';
import { updateShowLists } from '../../ReduxToolkit/Slice/ListSlice';

import TaskList from './TaskList';

class TaskListContainer extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.Lists !== this.props.Lists || prevProps.Filter !== this.props.Filter) {
      this.props.updateShowLists();
    }
  }

  render() {
    return <TaskList {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    ShowLists: getShowLists(state),
    Lists: getLists(state),
    Filter: getFilter(state),
  };
};

export default connect(mapStateToProps, {
  updateShowLists,
})(TaskListContainer);
