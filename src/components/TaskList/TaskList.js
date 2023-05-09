import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TaskContainer from '../Task/TaskContainer';
import TaskFilter from '../TasksFilter/TaskFilter';
import Task from '../Task/Task';

class TaskList extends Component {
  render() {
    return (
      <ul className="todo-list">
        {this.props.ShowLists.map((item, index) => (
          <TaskContainer key={`Task_${index}`} item={item} />
        ))}
      </ul>
    );
  }
}

TaskList.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    createdAt: PropTypes.string,
    completed: PropTypes.bool,
    editing: PropTypes.bool,
  }),
};

export default TaskList;
