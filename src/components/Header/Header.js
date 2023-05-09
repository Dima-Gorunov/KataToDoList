import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import NewTaskFormContainer from '../NewTaskForm/NewTaskFormContainer';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <NewTaskFormContainer />
      </div>
    );
  }
}

export default Header;
