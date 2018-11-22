/* eslint-disable */
import React from "react";
import screenAwareComponent from "./screenAwareComponent";
import { withStyles } from "@material-ui/core";

const responsiveComponent = (WrappedComponent, { vertical, horizontal }) => {
  const VerticalUI = withStyles(vertical)(WrappedComponent);
  const HorizontalUI = withStyles(horizontal)(WrappedComponent);
  return screenAwareComponent(
    ({ isVerticalView, ...rest }) =>
      isVerticalView ? (
        <VerticalUI isVerticalView={isVerticalView} {...rest} />
      ) : (
        <HorizontalUI isVerticalView={isVerticalView} {...rest} />
      )
  );
};

export default responsiveComponent;
