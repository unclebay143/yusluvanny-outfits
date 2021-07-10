import React, { useState } from "react";

import "./navbar.css";
import { faBars, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form } from "react-bootstrap";
import { Menu } from "../menu/Menu";
import logo from "./../../../assets/carousel-1.jpg";

export const NavBar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Hamburger menu func
  const handleNavbarToggle = () => {
    document.querySelector(".menu-nav").classList.toggle("open");
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (
    <React.Fragment>
      <Menu />
      <header>
        <section className="top-navbar" onClick={() => handleNavbarToggle()}>
          <FontAwesomeIcon
            icon={isNavbarOpen ? faTimes : faBars}
            className="hamburger"
          />
        </section>
        <h1 className="big-screen-label">Yusluvanny Outfits</h1>
        <section className="social-media-icon">
          <a
            href="https://www.facebook.com/yusuf.animashaun.161"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=2349061610159&text=Hello Yusluvanny,"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="https://www.instagram.com/yusluvannyoutfit_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </section>
      </header>
      <section className="header-brand">
        <h1 className="small-screen-label">
          Yusluvanny Outfits
          {/* <img src={logo} width="100" /> */}
        </h1>
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
