import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import App from './App';
import { getLocalStorageListsThunk } from './ReduxToolkit/Slice/ListSlice';

const AppContainer = (props) => {
  useEffect(() => {
    props.getLocalStorageListsThunk();
  }, []);

  return <App {...props} />;
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { getLocalStorageListsThunk })(AppContainer);
