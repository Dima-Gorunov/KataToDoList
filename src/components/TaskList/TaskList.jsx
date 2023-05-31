import React from 'react';
import PropTypes from 'prop-types';

import TaskContainer from '../Task/TaskContainer';

const TaskList = (props) => {
  return (
    <ul className="todo-list">
      {props.ShowLists.map((item, index) => (
        <TaskContainer key={`Task_${index}`} item={item} />
      ))}
    </ul>
  );
};

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
