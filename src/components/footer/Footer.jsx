import React from "react";

import "./footer.scss";

import { Link } from "react-router-dom";

import bg from "./../../assets/footer-bg.jpg";
import logo from "./../../assets/logo.png";

import * as Config from "./../../constants/Config";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="logo" />
            <Link to={`/${Config.HOME_PAGE}`}>
              <h2>MoviesBox</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
