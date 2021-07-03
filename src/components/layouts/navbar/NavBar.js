import React from "react";

import "./navbar.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form } from "react-bootstrap";

export const NavBar = () => {
  return (
    <React.Fragment>
      <header>
        <section className="top-navbar">
          <FontAwesomeIcon icon={faBars} className="hamburger" />
        </section>
        <h1 className="big-screen-label">Yusluvanny Outfit</h1>
        <section className="social-media-icon">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </section>
      </header>
      <section class="header-brand">
        <h1 className="small-screen-label">Yusluvanny</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Search for cloth, shoe" />
            <Button>Search</Button>
          </Form.Group>
        </Form>
      </section>
    </React.Fragment>
  );
};
