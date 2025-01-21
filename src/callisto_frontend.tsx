import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createRender } from "@anywidget/react";

const render = createRender(App);
export default { render };
