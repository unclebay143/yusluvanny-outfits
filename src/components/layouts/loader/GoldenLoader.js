import React from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const GoldenLoader = () => {
  return (
    <React.Fragment>
      <div className="homepage-loader text-center">
        <FontAwesomeIcon icon={faSpinner} spin />
      </div>
    </React.Fragment>
  );
};
