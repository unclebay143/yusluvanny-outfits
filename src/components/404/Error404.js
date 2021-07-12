import React from "react";
import { Link } from "react-router-dom";
import { pageUrl } from "../constants/pageurl";

export const Error404 = () => {
  return (
    <React.Fragment>
      <div className="col text-center mx-auto mt-5">
        <h1 style={{ lineHeight: "3" }}>
          Sorry 😥
          <br />
        </h1>
        <p className="text-muted">That page does not exist</p>
        <Link to={pageUrl.HOME_PAGE}>Back home</Link>
      </div>
    </React.Fragment>
  );
};
