/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shim } from "promise.prototype.finally";
shim();
/* eslint-enable */

ReactDOM.render(<App />, document.getElementById("rebind-app"));
