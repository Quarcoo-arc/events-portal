import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeftOutlined } from "@mui/icons-material";
import "./Error.css";

const Error = () => {
  return (
    <div id="error">
      <h1>Page Not Found</h1>
      <Link className="link" to="/">
        <ChevronLeftOutlined /> <p>Back to Home</p>
      </Link>
    </div>
  );
};

export default Error;
