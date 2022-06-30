import React from "react";
import { render } from "react-dom";
import AppService from "./modules/app.service";
import { config } from "./modules/config";
import "./modules/header.component";
import App from "./App";
import "./css/index.css";
import "./scss/index.scss";

console.log("Config: ", config.key);

const service = new AppService("Hello world");
service.log();

render(<App />, document.getElementById("root"));