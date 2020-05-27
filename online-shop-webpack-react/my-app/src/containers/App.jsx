import React, {memo, useEffect} from 'react';
import {hot} from "react-hot-loader/root";
import {connect} from 'react-redux';
import {compose} from 'redux';

import ProtoTypes from 'prop-types';

import HeaderBody from './HeaderBody.jsx';
import MainBody from './MainBody.jsx';
import Loader from '../components/Loader.jsx';
import useStyles from '../styles/JSS/App';

import {
  startLoader,
  endLoader,
} from '../actions';

const App = ({load, ...props}) => {
  const classes = useStyles();

  useEffect(() => {
    props.startLoader();
    setTimeout(() => {
      props.endLoader();
    }, 1000);
  }, []);

  return (
    <div className={classes.root}>
      <Loader active={load}/>
      <HeaderBody/>
      <MainBody/>
    </div>
  );
};

const mapStateToProps = state => ({
  load: state.load,
});

const mapDispatchToProps = {
  startLoader,
  endLoader,
};

App.displayName = 'App';

App.protoTypes = {
  load: ProtoTypes.bool.isRequired,
  startLoader: ProtoTypes.func.isRequired,
  endLoader: ProtoTypes.func.isRequired,
};

export default compose(
  hot,
  (connect(mapStateToProps, mapDispatchToProps)),
  memo,
)(App);
