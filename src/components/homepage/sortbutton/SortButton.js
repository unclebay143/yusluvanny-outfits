import React from "react";
import { Dropdown } from "react-bootstrap";
import "./sortbutton.css";

export const SortButton = () => {
  return (
    <React.Fragment>
      <section className="sortby-button-container">
        <Dropdown>
          <Dropdown.Toggle id="sortby">Sort products by</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Price, low to high </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Price, high to low</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Date, new to old</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Date, old to new</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </section>
    </React.Fragment>
  );
};
