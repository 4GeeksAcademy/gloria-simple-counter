// Import React into the bundle
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

// Include your styles into the webpack bundle
import "../styles/index.css";
import PropTypes from "prop-types";
import Home from "./component/home.jsx"

// Render your React application
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<Home />);

