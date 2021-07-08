import React from "react";
import { Dropdown } from "react-bootstrap";

export const SortButton = (setSortOption) => {
  const handleChange = (selectedOption) => {
    setSortOption(selectedOption);
  };
  return (
    <React.Fragment>
      <section className="sortby-button-container">
        <Dropdown>
          <Dropdown.Toggle id="sortby">Sort products by</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onSelect={() => handleChange("low")}>
              Price, low to high{" "}
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => handleChange("high")}>
              Price, high to low
            </Dropdown.Item>
            <Dropdown.Item>Date, new to old</Dropdown.Item>
            <Dropdown.Item>Date, old to new</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </section>
    </React.Fragment>
  );
};
