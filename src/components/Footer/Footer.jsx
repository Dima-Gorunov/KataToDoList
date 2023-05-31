import React from 'react';
import PropTypes from 'prop-types';

import TaskFilterContainer from '../TasksFilter/TaskFilterContainer';

const Footer = (props) => {
  const clearCompleted = () => {
    props.clearCompleted();
  };
  return (
    <div className="footer">
      <span className="todo-count">{props.ItemLeft} items left</span>
      <TaskFilterContainer />
      <button className="clear-completed" onClick={() => clearCompleted()}>
        Clear completed
      </button>
    </div>
  );
};

Footer.propTypes = {
  ItemLeft: PropTypes.number,
};

Footer.defaultProps = {
  ItemLeft: 0,
};

export default Footer;
