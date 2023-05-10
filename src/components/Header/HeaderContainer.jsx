import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';

const HeaderContainer = () => {
  return <Header />;
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(HeaderContainer);
