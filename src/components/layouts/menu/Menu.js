import React from "react";
import "./menu.css";

export const Menu = () => {
  return (
    <React.Fragment>
      <nav className="menu-nav">
        <section className="menu-nav--links">
          <h4>Payment Details</h4>
          <ul>
            <li>Bank name: Stanbic ibtc</li>

            <li>Account number: 0020801552</li>

            <li>Account name: Animashaun Yusuf</li>
          </ul>

          <h4>Contact informations</h4>
          <ul>
            <li>Email: yusluvanny1@gmail.com</li>

            <li>Mobile number: 0020801552</li>

            <li>Shop Location: </li>
          </ul>
          <span className="developer">
            Designed by{" "}
            <a
              href="https://unclebigbay.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              unclebigbay
            </a>
          </span>
        </section>
      </nav>
    </React.Fragment>
  );
};
