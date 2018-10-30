/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { modalSelector } from "../../reducers/rootReducer";
import AuthModalContainer from "../auth/AuthModalContainer";
import {
  SIGN_UP_MODAL_NAME,
  LOGIN_MODAL_NAME
} from "../../reducers/modal/modalActionCreators";
/* eslint-enable */

const ModalContainer = ({ modal }) => {
  let currentlyOppenedModal;
  switch (modal.show) {
    case SIGN_UP_MODAL_NAME:
    case LOGIN_MODAL_NAME:
      currentlyOppenedModal = <AuthModalContainer open />;
      break;
    default:
      currentlyOppenedModal = <React.Fragment />;
  }
  return currentlyOppenedModal;
};

ModalContainer.propTypes = {
  modal: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  modal: modalSelector(state)
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);
