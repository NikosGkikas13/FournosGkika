import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const Footer = (props) => {
  const langFooter = props.propsLang.enabledLang.main.FooterInfo;
  var date = new Date();
  var year = date.getFullYear(0);
  return (
    <div id="footer">
      <div className="logo-footer-container">
        <img
          className="logo-footer"
          src={require(`./../images/logo.png`).default}
        />
        <h1>© {year} Fournos Gkika All rights reserved.</h1>
      </div>
      <div className="footerInfo-div">
        {langFooter.map((item) => {
          return (
            <div className="footerInfo">
              <img className="contact-icon" src={item.icon} alt="" />
              <h1>{item.text}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
