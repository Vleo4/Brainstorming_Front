import React, { useEffect } from "react";
import "..//styles/Footer.css";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const Footer = ({ setIsAboutPage }) => {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
    }
  }, []);

  return (
    <div>
      <div className="footer-container">
        <div className="footer-top-content">
          <p className="tcc-text">Contact with us</p>
          <div className="footer-icons">
            <a href="mailto:saton.inco@gmail.com" className="ficon">
              <GoogleIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/volodya-peleshchyshyn-862465246"
              target="blank"
              className="ficon"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
        <div className="footer-middle-content">
          <div className="footer-navbar">
            <Link
              to="/"
              className="footer-navbar-item"
              onClick={() => {
                setIsAboutPage(false);
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="footer-navbar-item"
              onClick={() => {
                setIsAboutPage(true);
              }}
            >
              About
            </Link>
            <Link
              to="/team"
              className="footer-navbar-item"
              onClick={() => {
                setIsAboutPage(true);
              }}
            >
              Our Team
            </Link>
            <a
              href="https://send.monobank.ua/jar/5Femsf3XqZ"
              target="blank"
              className="footer-navbar-item"
              onClick={() => {
                setIsAboutPage(true);
              }}
            >
              Support Us
            </a>
          </div>
        </div>
        <div className="footer-bottom-content">
          <p className="author-text">© Saton Team, 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
