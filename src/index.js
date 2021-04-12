import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import './index.css';
import { ThemeProvider } from "@material-ui/core";
import theme from "./components/theme";


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
