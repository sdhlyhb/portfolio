import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h1>Whoops!</h1>
      <div>
        PageNotFound! Please <Link to="/">return to the home page</Link>
      </div>
    </div>
  );
}

export default PageNotFound;
