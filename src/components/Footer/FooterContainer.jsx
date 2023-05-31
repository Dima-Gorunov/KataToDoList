import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getItemLeft, getLists } from '../../ReduxToolkit/Selectors/ListSelector';
import { clearCompleted, setItemLeft } from '../../ReduxToolkit/Slice/ListSlice';

import Footer from './Footer';

const FooterContainer = (props) => {
  useEffect(() => {
    props.setItemLeft();
  }, [props.Lists]);

  return <Footer {...props} />;
};

const mapStateToProps = (state) => {
  return {
    ItemLeft: getItemLeft(state),
    Lists: getLists(state),
  };
};

export default connect(mapStateToProps, { setItemLeft, clearCompleted })(FooterContainer);
