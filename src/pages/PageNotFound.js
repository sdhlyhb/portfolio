import React from "react";
import { Link } from "react-router-dom";
import "../styles/PageNotFound.css";

function PageNotFound() {
  return (
    <div className="page-not-found-container">
      <h1>Whoops!</h1>
      <div>
        PageNotFound! Please <Link to="/">return to the home page</Link>
      </div>
    </div>
  );
}

export default PageNotFound;
