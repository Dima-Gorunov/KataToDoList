import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getItemLeft, getLists } from '../../ReduxToolkit/Selectors/ListSelector';
import { clearCompleted, setItemLeft } from '../../ReduxToolkit/Slice/ListSlice';

import Footer from './Footer';

class FooterContainer extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.Lists !== this.props.Lists) {
      this.props.setItemLeft();
    }
  }

  render() {
    return <Footer {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    ItemLeft: getItemLeft(state),
    Lists: getLists(state),
  };
};

export default connect(mapStateToProps, { setItemLeft, clearCompleted })(FooterContainer);
