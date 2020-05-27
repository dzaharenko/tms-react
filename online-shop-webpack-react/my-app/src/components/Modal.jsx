import React from "react";

import modal from '../styles/JSS/modal';

import withDisplay from "../HOCs/withDisplay.jsx";
import {withRouter} from "react-router";

const Modal = (props) => {
  const classes = modal();
  return (
    <>
      <div onClick={props.onClose} className={classes.modal_background}/>
      <div className={classes.modal_root}>{props.children}</div>
    </>
  )
};

Modal.displayName = 'Modal';

export default withRouter(withDisplay(Modal));
