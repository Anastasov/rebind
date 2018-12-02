/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setNavTabIndexActionCreator } from "../reducers/nav/navActionCreators";
import { getTabIndexForPath } from "../components/nav/Paths";
/* eslint-enable */

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  setNavTabIndex: setNavTabIndexActionCreator
};

const pathAwareComponent = (WrappedPathComponent, path = "") =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    class PathAwareComponent extends Component {
      static propTypes = {
        setNavTabIndex: PropTypes.func.isRequired
      };
      /* eslint-enable */

      constructor(props) {
        super(props);
        const { setNavTabIndex } = props;
        setNavTabIndex(getTabIndexForPath(path));
      }

      render() {
        return <WrappedPathComponent path={path} {...this.props} />;
      }
    }
  );

export default pathAwareComponent;
