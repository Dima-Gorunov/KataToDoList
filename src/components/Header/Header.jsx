import React from 'react';

import NewTaskFormContainer from '../NewTaskForm/NewTaskFormContainer';

const Header = () => {
  return (
    <div className="header">
      <h1>todos</h1>
      <NewTaskFormContainer />
    </div>
  );
};

export default Header;
