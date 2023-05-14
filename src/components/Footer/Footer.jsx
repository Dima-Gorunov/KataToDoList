import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TaskFilterContainer from '../TasksFilter/TaskFilterContainer';

class Footer extends Component {
  clearCompleted() {
    this.props.clearCompleted();
  }

  render() {
    return (
      <div className="footer">
        <span className="todo-count">{this.props.ItemLeft} items left</span>
        <TaskFilterContainer />
        <button className="clear-completed" onClick={() => this.clearCompleted()}>
          Clear completed
        </button>
      </div>
    );
  }
}

Footer.propTypes = {
  ItemLeft: PropTypes.number,
};

Footer.defaultProps = {
  ItemLeft: 0,
};

export default Footer;
