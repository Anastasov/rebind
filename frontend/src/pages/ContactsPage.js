/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import HomePage from "./home/HomePage";
import authComponent from "../components/auth/authComponent";
/* eslint-enable */

class ContactsPage extends Component {
  /* eslint-disable */
  render() {
    return <HomePage />;
  }
  /* eslint-enable */
}

export default authComponent(ContactsPage, "/con");
