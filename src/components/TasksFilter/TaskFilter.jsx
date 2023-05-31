import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TaskFilter = (props) => {
  const filterLists = (e, text) => {
    props.setFilterThunk(text);
  };

  return (
    <ul className="filters">
      {props.Filter.map((item, index) => (
        <li key={`filter_${index}`}>
          <button onClick={(e) => filterLists(e, item.text)} className={`${item.active && 'selected'}`}>
            {item.text}
          </button>
        </li>
      ))}
    </ul>
  );
};

TaskFilter.propTypes = {
  Filter: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      active: PropTypes.bool,
    })
  ),
};

export default TaskFilter;
