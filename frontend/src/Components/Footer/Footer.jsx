import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          {/* <img className="logo" src={assets.rhyno_logo} alt="" /> */}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            nisi esse ipsam minima, magni qui, cupiditate voluptatum perferendis
            quo voluptatibus vitae asperiores officiis accusamus? Cumque ducimus
            quasi voluptatibus adipisci facilis!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Refund policy</li>
            <li>Website policy</li>
            <li>Products</li>
            <li>Privacy policy</li>
            <li>Rentals</li>
          </ul>
        </div>
        <div className="footer-content-left">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-9023987528</li>
            <li>info@rhyno.in</li>
            <li>Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU,
            Raisan, Gandhinagar, Gujarat, India.</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 RhynoEV.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
