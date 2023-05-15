import React, { Component } from 'react';
import { connect } from 'react-redux';

import App from './App';
import { getLocalStorageListsThunk } from './ReduxToolkit/Slice/ListSlice';

class AppContainer extends Component {
  componentDidMount() {
    this.props.getLocalStorageListsThunk();
  }

  render() {
    return <App {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { getLocalStorageListsThunk })(AppContainer);
