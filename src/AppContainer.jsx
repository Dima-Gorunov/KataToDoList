import React from 'react';
import { connect } from 'react-redux';

import App from './App';

const AppContainer = (props) => {
  return <App {...props} />;
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(AppContainer);
