import React from "react";

import "./navbar.css";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form } from "react-bootstrap";

export const NavBar = () => {
  return (
    <React.Fragment>
      <header>
        <section className="top-navbar">
          <FontAwesomeIcon icon={faBars} className="hamburger" />
        </section>
        <h1 className="big-screen-label">Yusluvanny Outfits</h1>
        <section className="social-media-icon">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </section>
      </header>
      <section className="header-brand">
        <h1 className="small-screen-label">Yusluvanny Outfits</h1>
        <Form className="d-none">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Search for cloth, shoe" />
            <Button className="d-flex justify-content-center align-items-center">
              Search
              {/* <FontAwesomeIcon icon={faSearch} /> */}
            </Button>
          </Form.Group>
        </Form>
      </section>
    </React.Fragment>
  );
};
