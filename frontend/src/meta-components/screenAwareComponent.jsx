/* eslint-disable */
import React, { Component } from "react";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import { isMobileOnly } from "react-device-detect";
import withCookies from "./withCookies";

const screenAwareComponent = WrappedComponent =>
  withMobileDialog()(
    withCookies(({ fullScreen, ...rest }) => (
      <WrappedComponent isVerticalView={isMobileOnly || fullScreen} {...rest} />
    ))
  );

export default screenAwareComponent;
