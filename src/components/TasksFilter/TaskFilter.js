import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TaskFilter extends Component {
  filterLists(e, text) {
    this.props.setFilterThunk(text);
  }

  render() {
    return (
      <ul className="filters">
        {this.props.Filter.map((item, index) => (
          <li key={`filter_${index}`}>
            <button onClick={(e) => this.filterLists(e, item.text)} className={`${item.active && 'selected'}`}>
              {item.text}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

TaskFilter.propTypes = {
  Filter: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      active: PropTypes.bool,
    })
  ),
};

export default TaskFilter;
